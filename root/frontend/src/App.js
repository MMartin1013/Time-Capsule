import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/Registerpage";
import LoginPage from "./pages/Loginpage";
import MessagePage from "./pages/Messagepage"
import "./css/App.css";

const router = createBrowserRouter([
  
  {
    /* Home page route where we will return hompage component */
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/home",
    element: <Homepage/>,
  },
  {
    /* Register page route where we will return register component */
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    /* Login page route where we will return login component */
    path: "/login",
    element: <LoginPage/>,
  },
  {
    /* Login page route where we will return login component */
    path: "/message",
    element: <MessagePage/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;