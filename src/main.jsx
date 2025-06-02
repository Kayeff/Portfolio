import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "projects", element: <Projects /> },
        { path: "about", element: <About /> },
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
