import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub, BsFacebook, BsGoogle } from "react-icons/bs";
import logo from "./../../assets/lg2.png";
import loginBg from "./../../assets/login/1.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import axios from "axios";


const RegistrationPage = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    //sign up
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // axios.post(, {
        //   name: data.name,
        //   email: data.email,
        //   photoURL: data.photoURL
        // })
        setRegisterError("");
        navigate("/");
        toast("Sign up Successfully!");
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            //create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database");
                console.log("user profile info updated");
                reset();
              }
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  //sign up with google
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
        toast("Sign up Successfully!");
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="px-2 h-full py-10 flex flex-col lg:flex-row items-center justify-center "
    >
      <Helmet>
        <title>Fitness | Registration</title>
      </Helmet>
      <div className="form-side w-full md:w-[80%] lg:w-[40%]  ">
        <div className="w-[8rem] lg:w-[12rem] mb-5 ">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-full " />
          </Link>
        </div>

        <h1 className="font-semibold text-4xl mb-4 lg:mb-6 text-center text-[#f82457] ">
          Registration
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", { required: true })}
            className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
          />
          {errors.name && (
            <span className="text-sm text-[#f82457] ">Name's required</span>
          )}
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            {...register("photoURL", { required: true })}
            className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
          />
          {errors.photoURL && (
            <span className="text-sm text-[#f82457] ">
              Photo URL's required
            </span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
          />
          {errors.email && (
            <span className="text-sm text-[#f82457] ">Email's required</span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
          />
          {errors.password?.type === "required" && (
            <span className="text-sm text-[#f82457] ">Password's required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-sm text-[#f82457] ">
              Password must have at least 6 character
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-sm text-[#f82457] ">
              Password should not more than 20 character
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-sm text-[#f82457] ">
              Password must have at least
              <span className="font-semibold"> 1 uppercase</span> character,
              <span className="font-semibold"> 1 lowercase</span> character,
              <span className="font-semibold"> 1 special </span>
              character and <span className="font-semibold"> 1 number</span>
            </span>
          )}
          <p className="text-[#f82457] text-center ">{registerError}</p>
          <input
            type="submit"
            value="Sign up"
            className="p-2 rounded-md text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500 "
          />
        </form>
        <div className="text-white text-center mt-6 mb-4 ">
          <p>Or sign up with</p>
          <div className="flex items-center justify-center gap-4 mt-1 text-2xl ">
            <BsFacebook className="hover:text-[#f82457] duration-300 hover:transform hover:scale-125 "></BsFacebook>
            <BsGoogle
              onClick={handleGoogleSignUp}
              className="hover:text-[#f82457] duration-300 cursor-pointer hover:transform hover:scale-125 "
            ></BsGoogle>
            <BsGithub className="hover:text-[#f82457] duration-300 hover:transform hover:scale-125 "></BsGithub>
          </div>
        </div>
        <div className="text-white flex items-center justify-center gap-2">
          <p>Already have an account?</p>
          <Link to={"/login"} className="text-[#f82457] font-semibold ">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
