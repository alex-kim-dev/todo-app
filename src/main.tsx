import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '~/App';
import { GlobalState } from '~/GlobalState';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </StrictMode>,
);
