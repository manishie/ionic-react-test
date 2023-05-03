import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './state/AppContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
