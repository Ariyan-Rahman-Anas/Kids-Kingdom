import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import PrimaryBtn from "./PrimaryBtn";
import toast from "react-hot-toast";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/logIn");
        toast.success("Log out Successful!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-2">
        <div className="nav-start w-[5rem] ">
          <Link to={"/"}>
            <img src={Logo} alt="The Website Logo" className="w-full" />
          </Link>
        </div>
        <div className="navbar-middle">
          <ul
            className={`flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 absolute md:static ${
              menu
                ? "top-[5.5rem] right-0 bg-black text-white bg-opacity-90 w-full h-[50vh] "
                : "-top-[69rem]"
            }  duration-700 z-10 `}
          >
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-[#CA10FF]">
                Home
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#CA10FF] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink
                to={"/addProduct"}
                className="group-hover:text-[#CA10FF]"
              >
                Add Product
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#CA10FF] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/myCart"} className="group-hover:text-[#CA10FF]">
                My Cart
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#CA10FF] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <div>
                    <img src={user?.photoURL} alt="" />
                  </div>
                </li>
                <li
                  onClick={handleLogOut}
                  className="md:hidden tex-white relative group"
                >
                  <NavLink to={"/logIn"} className="group-hover:text-[#CA10FF]">
                    Log out
                    <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#CA10FF] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="md:hidden tex-white relative group">
                <NavLink to={"/logIn"} className="group-hover:text-[#CA10FF]">
                  Log in
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#CA10FF] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end flex ">
          <div className="hidden md:block">
            {user ? (
              <button onClick={handleLogOut}>
                <PrimaryBtn link={"/login"} value={"Log out"}></PrimaryBtn>
              </button>
            ) : (
              <PrimaryBtn link={"/login"} value={"Log in"}></PrimaryBtn>
            )}
          </div>
          <div className="md:hidden">
            {menu ? (
              <button onClick={handleMenu}>
                <RxCross2 className="text-4xl text-[#CA10FF]"></RxCross2>{" "}
              </button>
            ) : (
              <button onClick={handleMenu}>
                <IoMenuOutline className="text-4xl "></IoMenuOutline>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;