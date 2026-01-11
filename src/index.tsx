import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThirdwebProvider } from "thirdweb/react";
console.log("Web3 Battle Series: Arena is initializing...");

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThirdwebProvider>
        <App />
      </ThirdwebProvider>
    </React.StrictMode>
  );
  console.log("Web3 Battle Series: Arena mounted successfully.");
} else {
  console.error("Critical Error: Root element not found.");
}
