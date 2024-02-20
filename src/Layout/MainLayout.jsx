import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./../Shared Components/Navbar";
import Footer from "../Shared Components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("registration");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
