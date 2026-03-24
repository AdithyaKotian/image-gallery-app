import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import AppContextProvider from "./context/AppContextProvider";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);