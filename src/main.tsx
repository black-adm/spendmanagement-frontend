import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/globals.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { queryClient } from "./lib/reactQuery.ts";
import { AppRouter } from "./routes/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
        <Toaster richColors />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
