// Regenerates icon PNGs from public/icon.svg.
// Requires a one-off install: `npm i --no-save @resvg/resvg-js`
// Run with: `node scripts/generate-icons.mjs`
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');
const svg = readFileSync(resolve(publicDir, 'icon.svg'), 'utf-8');

const render = (size) => {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
    background: 'rgba(0,0,0,0)',
  });
  return resvg.render().asPng();
};

writeFileSync(resolve(publicDir, 'apple-icon.png'), render(180));
writeFileSync(resolve(publicDir, 'icon-dark-32x32.png'), render(32));
writeFileSync(resolve(publicDir, 'icon-light-32x32.png'), render(32));
writeFileSync(resolve(publicDir, 'icon-192.png'), render(192));
writeFileSync(resolve(publicDir, 'icon-512.png'), render(512));
console.log('Icons generated.');
