import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../Provider/AuthProvider";
import loginBg from "./../../assets/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub, BsFacebook, BsGoogle } from "react-icons/bs";
import logo from "./../../assets/logo.svg";

const LogInPage = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    //log in
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setLogInError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLogInError("Invalid email or password");
      });
  };

  //log in with google
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        setLogInError("");
        navigate(from, { replace: true });
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
      })
      .catch((error) => {
        setLogInError(error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.40), rgba(0,0,0,0.70)), url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-2 h-[125vh] flex flex-col lg:flex-col items-center justify-center "
    >
      {/* <Helmet>
        <title>Fitness | Log in</title>
      </Helmet> */}
      <div className="form-side w-full md:w-[80%] lg:w-[40%]  ">
        <div className="w-[8rem] lg:w-[12rem] mb-5 ">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-full " />
          </Link>
        </div>

        <div className="border-[.09rem] border-[#ca10ff] bg-blur backdrop-filter backdrop-blur-md p-5 rounded-md ">
          <h1 className="font-semibold text-4xl mb-4 lg:mb-6 text-center text-[#ca10ff] ">
            Log in
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="p-2 rounded-md focus:outline-none border-y-2 border-transparent focus:border-b-[#ca10ff] "
            />
            {errors.email && (
              <span className="text-sm text-[#ca10ff] ">Email's required</span>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="p-2 rounded-md focus:outline-none border-y-2 border-transparent focus:border-b-[#ca10ff] "
            />
            {errors.password && (
              <span className="text-sm text-[#ca10ff] ">
                Password's required
              </span>
            )}
            <p className="text-[#ca10ff] text-center">{logInError} </p>
            <input
              type="submit"
              value="Log in"
              className="p-2 rounded-md text-white hover:text-[#ca10ff] bg-[#ca10ff] hover:bg-white border-[.09rem] border-transparent hover:border-[#ca10ff] duration-500 "
            />
          </form>
          <div className="text-white text-center mt-6 mb-4 ">
            <p className="underline mb-1.5 tracking-wide ">Or log in with</p>
            <div className="flex items-center justify-center gap-4 mt-1 text-2xl ">
              <BsFacebook className="hover:text-[#ca10ff] duration-300 hover:transform hover:scale-125 "></BsFacebook>
              <BsGoogle
                onClick={handleGoogleLogIn}
                className="hover:text-[#ca10ff] cursor-pointer duration-300 hover:transform hover:scale-125 "
              ></BsGoogle>
              <BsGithub className="hover:text-[#ca10ff] duration-300 hover:transform hover:scale-125 "></BsGithub>
            </div>
          </div>
          <div className="text-white flex items-center justify-center gap-2">
            <p>Don't have an account?</p>
            <Link
              to={"/registration"}
              className="text-[#ca10ff] hover:text-white font-semibold "
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogInPage;
