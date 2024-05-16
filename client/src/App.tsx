import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRoutes from "./user-side/routes/MainRoutes";
import { AuthContext } from "./contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={false}>
        <MainRoutes />
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
