import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  { basename: "/Portfolio/" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll>
      <RouterProvider router={router} />
    </SmoothScroll>
  </StrictMode>
);
