import React from 'react';
import type {} from 'react/next';
import { createRoot } from 'react-dom/client';

import App from './App';
import GlobalState from './GlobalState';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,
);
