import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/App.css";

const router = createBrowserRouter([
  {
    /* Home page route where we will return hompage component */
    path: "/",
    element: <div>Homepage</div>,
  },
  {
    path: "/home",
    element: <div>Homepage</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;