import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/globals.css";

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
