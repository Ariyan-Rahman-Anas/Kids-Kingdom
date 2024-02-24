import sectionBG from "./../assets/HomePage/wave.svg";
import leftBG from "./../assets/HomePage/h1-banner-01.jpg";
import rightBG from "./../assets/HomePage/h1-banner-02.webp";
import PrimaryBtn from "./PrimaryBtn";
import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';

const SignShopSection = () => {
  const {user}  =useContext(AuthContext)
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.0)), url(${sectionBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="py-10 px-2 my-20"
    >
      <div className="text-center text-sm flex flex-col items-center md:flex-row md:px-20 gap-24">
        <div className="left group">
          <div className="mb-20 md:-rotate-12 group-hover:rotate-0 duration-300 ">
            <img src={leftBG} alt="" className="rounded-lg  w-full " />
          </div>
          <h1 className="text-2xl font-semibold text-[#ca10ff] ">
            YOU COULD WIN A $25 VOUCHER
          </h1>
          <p className="mt-1 mb-5">
            When You Sign Up For A FREE Copy Of The Catalogue!
          </p>
          {user ? (
            <PrimaryBtn value={"Learn more"}></PrimaryBtn>
          ) : (
            <PrimaryBtn value={"Sign up now"} link={"/registration"} ></PrimaryBtn>
          )}
        </div>
        <div className="right group ">
          <div className="mb-20 md:rotate-12 group-hover:rotate-0 duration-300">
            <img src={rightBG} alt="" className="rounded-lg w-full " />
          </div>
          <h1 className="text-2xl font-semibold text-[#ca10ff] ">
            NEW IN CHILDREN'S EDUCATIONAL TOYS
          </h1>
          <p className="mt-1 mb-5">Up To 40% Off Educational Toys</p>
          {user ? (
            <PrimaryBtn value={"Explore more..."} link={"/"}></PrimaryBtn>
          ) : (
            <PrimaryBtn value={"Shop now"} link={"/login"}></PrimaryBtn>
          )}
        </div>
      </div>
    </div>
  );
};
export default SignShopSection;