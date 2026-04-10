import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted variable fonts — bundled with the build
import '@fontsource-variable/fraunces';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';

import App from '@/App';
import '@/index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
