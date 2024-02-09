import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes/index.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import GlobalStyles from "./styles/global.js";
import { AuthProvider } from "./hooks/auth.jsx";
import { OrderProvider } from "./Context/OrderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <OrderProvider>
          <Routes />
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
