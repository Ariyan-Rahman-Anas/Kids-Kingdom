import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import LogInPage from './../Pages/Login/LogInPage';
import RegistrationPage from "../Pages/Registration/RegistrationPage";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<HomePage></HomePage>
            },
            {
                path: "login",
                element:<LogInPage></LogInPage>
            },
            {
                path: "registration",
                element:<RegistrationPage></RegistrationPage>
            }
        ]
    }
])
export default MainRoute;