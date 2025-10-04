import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import about from "./Pages/about.jsx";
import contact from "./Pages/contact.jsx";
import Home from "./Pages/Home.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index:true,
        Component: Home,
        element: <h1>hello</h1>,
      },
      {
        path: "/about",
        Component: about,
        element: <h1>hello</h1>,
      },
      {
        path: "/contact",
        Component: contact,
        element: <h1>hello</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
