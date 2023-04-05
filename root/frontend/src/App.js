import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./css/App.css";

const router = createBrowserRouter([
  {
    /* Home page route where we will return hompage component */
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/home",
    element: <Homepage/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;