import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExtendThemeProvider } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExtendThemeProvider>
      <App />
    </ExtendThemeProvider>
  </React.StrictMode>
);
