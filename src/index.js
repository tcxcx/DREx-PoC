import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChainId, DAppProvider } from '@usedapp/core';

/* const container = document.getElementById("root");
 *//* const root = createRoot(container);
 */const config = {
  readOnlyChainId: ChainId.Moonriver,
};


ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
