import { useEffect, useRef } from 'react';

const GRID = 64;
const SPEED = 280; // px/s
const MAX_PULSES = 16;
const MAX_CELLS = 7;

interface Pulse {
  path: Array<{ x: number; y: number }>;
  headX: number;
  headY: number;
  dx: number;
  dy: number;
  segProgress: number;
  cellCount: number;
  maxCells: number;
  fade: number;
  stopped: boolean;
}

export function GridSignal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const pulses: Pulse[] = [];
    let lastSpawnGx = -9999;
    let lastSpawnGy = -9999;
    let lastTime = 0;
    let animId = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      // Snap mouse to nearest large grid intersection
      const gx = Math.round(e.clientX / GRID) * GRID;
      const gy = Math.round(e.clientY / GRID) * GRID;

      if (gx === lastSpawnGx && gy === lastSpawnGy) return;
      lastSpawnGx = gx;
      lastSpawnGy = gy;

      if (pulses.length >= MAX_PULSES) return;

      const dirs: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      const count = 2 + Math.floor(Math.random() * 3);
      const chosen = [...dirs].sort(() => Math.random() - 0.5).slice(0, count);

      for (const [dx, dy] of chosen) {
        pulses.push({
          path: [{ x: gx, y: gy }],
          headX: gx,
          headY: gy,
          dx,
          dy,
          segProgress: 0,
          cellCount: 0,
          maxCells: 2 + Math.floor(Math.random() * (MAX_CELLS - 2)),
          fade: 0,
          stopped: false,
        });
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    const frame = (time: number) => {
      const dt = Math.min((time - (lastTime || time)) / 1000, 0.05);
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      // Electric blue — complementary to the amber accent
      const [r, g, b] = isDark ? [80, 195, 255] : [20, 130, 230];

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];

        if (!p.stopped) {
          p.segProgress += SPEED * dt;
          const origin = p.path[p.path.length - 1];
          p.headX = origin.x + p.dx * p.segProgress;
          p.headY = origin.y + p.dy * p.segProgress;

          if (p.segProgress >= GRID) {
            const nx = origin.x + p.dx * GRID;
            const ny = origin.y + p.dy * GRID;
            p.path.push({ x: nx, y: ny });
            p.segProgress = 0;
            p.headX = nx;
            p.headY = ny;
            p.cellCount++;

            if (p.cellCount >= p.maxCells) {
              p.stopped = true;
            } else {
              // Occasionally turn at intersections (30% chance)
              if (Math.random() < 0.3) {
                if (p.dx !== 0) {
                  p.dy = Math.random() < 0.5 ? 1 : -1;
                  p.dx = 0;
                } else {
                  p.dx = Math.random() < 0.5 ? 1 : -1;
                  p.dy = 0;
                }
              }
            }
          }
        } else {
          p.fade += dt * 1.8;
          if (p.fade >= 1) {
            pulses.splice(i, 1);
            continue;
          }
        }

        const alpha = p.stopped ? 1 - p.fade : 1;
        if (alpha <= 0) continue;

        const points = [...p.path, { x: p.headX, y: p.headY }];
        if (points.length < 2) continue;

        // Outer glow
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let j = 1; j < points.length; j++) ctx.lineTo(points[j].x, points[j].y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.12})`;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Mid glow
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let j = 1; j < points.length; j++) ctx.lineTo(points[j].x, points[j].y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.35})`;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Core line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let j = 1; j < points.length; j++) ctx.lineTo(points[j].x, points[j].y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha * 0.9})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Bright head dot + glow
        if (!p.stopped) {
          const grad = ctx.createRadialGradient(p.headX, p.headY, 0, p.headX, p.headY, 14);
          grad.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.5})`);
          grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.beginPath();
          ctx.arc(p.headX, p.headY, 14, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.headX, p.headY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 2 }}
    />
  );
}
