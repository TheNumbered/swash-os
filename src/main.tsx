import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./global-context";
import { ExtendThemeProvider } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
    <ExtendThemeProvider>
      <App />
    </ExtendThemeProvider>
    </GlobalProvider>
  </React.StrictMode>
);
