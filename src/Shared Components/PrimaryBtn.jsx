import { Link } from "react-router-dom";

const PrimaryBtn = ({ value, link }) => {
  return (
    <Link
      to={link}
      className="px-[1.2rem] py-1.5 rounded-full w-fit font-normal text-white bg-[#ca10ff] border-[.09rem] border-transparent hover:border-[#ca10ff] hover:text-[#ca10ff] hover:bg-white duration-500  "
    >
      {value}
    </Link>
  );
};
export default PrimaryBtn;