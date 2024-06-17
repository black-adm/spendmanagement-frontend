import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/globals.css";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { AppRouter } from "./routes/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
      <Toaster richColors />
    </BrowserRouter>
  </React.StrictMode>
);
