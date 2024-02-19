import { Link } from "react-router-dom";

const PrimaryBtn = ({ value, link }) => {
  return (
    <Link
      to={link}
      className="px-[1.2rem] py-1.5 rounded-full w-fit font-normal text-white bg-[#ff3811] border-[.09rem] border-transparent hover:border-[#ff3811] hover:text-[#ff3811] hover:bg-white duration-500  "
    >
      {value}
    </Link>
  );
};
export default PrimaryBtn;
