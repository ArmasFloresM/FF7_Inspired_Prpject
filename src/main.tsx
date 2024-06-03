import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { MainMenu } from "./layouts/MainMenu.tsx";
import { GradientColorProvider } from "./context/GradientColorProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/main-menu",
    element: <MainMenu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GradientColorProvider>
      <RouterProvider router={router} />
    </GradientColorProvider>
  </React.StrictMode>
);
