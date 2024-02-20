import { Link } from "react-router-dom";
import Logo from "./../assets//logo.svg";
import { FaGoogle, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="text-gray-400 bg-black px-2 ">
      <div className=" pt-10 pb-6 grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:place-items-center gap-5">
        <div>
          <div className="w-[5rem] ">
            <img src={Logo} alt="" className="w-full" />
          </div>
          <p className="text-sm my-4">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial.
          </p>
          <div className="socials text-gray-200 flex items-center justify-start gap-4">
            <Link>
              <FaGoogle className="text-2xl   hover:text-[#CA10FF] duration-500 "></FaGoogle>
            </Link>
            <Link>
              <FaFacebookF className="text-2xl   hover:text-[#CA10FF] duration-500 "></FaFacebookF>
            </Link>
            <Link>
              <FaLinkedin className="text-2xl   hover:text-[#CA10FF] duration-500 "></FaLinkedin>
            </Link>
            <Link>
              <FaInstagram className="text-2xl   hover:text-[#CA10FF] duration-500 "></FaInstagram>
            </Link>
          </div>
        </div>
        <div className="">
          <strong className=" text-white">About</strong>
          <ul className="mt-2">
            <li className="hover:underline hover:text-gray-200  ">
              <Link>Home</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link>Service</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong className=" text-white">Company</strong>
          <ul className="mt-2">
            <li className="hover:underline hover:text-gray-200  ">
              <Link>About</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link>Location</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link>Why Car Doctor</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong className=" text-white">Support</strong>
          <ul className="mt-2">
            <li className="hover:underline hover:text-gray-200  ">
              <Link>Feedback</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link>Accessibility</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link>Support Center</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="pt-10 pb-2 text-center">
        Copy Right-{currentYear} || All rights reserved by Kids Kingdom ||
        Developed by
        <a
          target="_blank"
          rel="noopener noreferrer "
          href="https://ariyanrahmananas.netlify.app/"
        >
          {" "}
          Ariyan Rahman Anas
        </a>
      </p>
    </div>
  );
};
export default Footer;