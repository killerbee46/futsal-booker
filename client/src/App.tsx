import React from "react";
import { AuthContext } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainRoutes from "./routes/MainRoutes";
import { ConfigProvider } from "antd";
import { themeConfig } from "./themes/themeConfig";
const queryClient = new QueryClient()

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
    <QueryClientProvider client={queryClient}>
  <AuthContext.Provider value={false}>
    <MainRoutes />
  </AuthContext.Provider>
</QueryClientProvider> 
  </ConfigProvider>
  )
}

export default App;
