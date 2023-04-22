import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/Registerpage";
import LoginPage from "./pages/Loginpage";
import MessagePage from "./pages/Messagepage"
import SplashLoginpage from "./pages/SplashLoginpage"
import CalendarPage from "./pages/Calendarpage"
import "./css/App.css";

const router = createBrowserRouter([
  
  {
    /* Home page route where we will return hompage component */
    path: "/",
    element: <SplashLoginpage/>,
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
  {
    /* Login page route where we will return login component */
    path: "/calendar",
    element: <CalendarPage/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;