import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import LogInPage from './../Pages/Login/LogInPage';
import RegistrationPage from "../Pages/Registration/RegistrationPage";
import AddProductPage from "../Pages/Add Product/AddProductPage";
import MyCartPage from "../Pages/My Cart/MyCartPage";
import PrivateRoute from "./PrivateRoute";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "addProduct",
        element: (
          <PrivateRoute>
            <AddProductPage></AddProductPage>
          </PrivateRoute>
        ),
      },
      {
        path: "myCart",
        element: <MyCartPage></MyCartPage>,
      },
      {
        path: "login",
        element: <LogInPage></LogInPage>,
      },
      {
        path: "registration",
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
]);
export default MainRoute;