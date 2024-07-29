import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "../context/AuthContext.jsx";
import { CashContextProvider } from "../context/CashFlowContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    retry: 2, // Retry 2 times on failed requests
    queries: {
      refetchOnWindowFocus: false, // Only refetch on page navigation
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <CashContextProvider>
            <App />
            <ToastContainer autoClose={2500} position="top-center" />
          </CashContextProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
