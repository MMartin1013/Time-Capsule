import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inboxpage from "./pages/Inboxpage";
import RegisterPage from "./pages/Registerpage";
import LoginPage from "./pages/Loginpage";
import MessagePage from "./pages/Messagepage"
import SplashLoginpage from "./pages/SplashLoginpage"
import "./css/App.css";

const router = createBrowserRouter([
  
  {
    /* Home page route where we will return a special login page */
    path: "/",
    element: <SplashLoginpage/>,
  },
  {
    path: ":username/inbox",
    element: <Inboxpage/>,
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
    path: ":username/message",
    element: <MessagePage/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;