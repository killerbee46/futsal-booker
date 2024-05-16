import React from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import { themeConfig } from "./user-side/themes/themeConfig";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
  theme={themeConfig}
>
  <App />
</ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
