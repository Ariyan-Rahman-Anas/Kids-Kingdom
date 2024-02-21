import { Link } from "react-router-dom";

const Category = () => {
  const categoryData = [
    {
      name: "ACTION TOYS",
      imgUrl: "https://i.ibb.co/6ggQ6vn/1.png",
      stock: 3,
    },
    {
      name: "PRE-SCHOOL TOYS",
      imgUrl: "https://i.ibb.co/bP54q5F/2.png",
      stock: 5,
    },
    {
      name: "ELECTRONIC TOYS",
      imgUrl: "https://i.ibb.co/wLZFPHr/3.png",
      stock: 6,
    },
    {
      name: "EDUCATIONAL TOYS",
      imgUrl: "https://i.ibb.co/MS03pzt/4.png",
      stock: 8,
    },
    {
      name: "TRANSPORTS TOYS",
      imgUrl: "https://i.ibb.co/fFPcf86/5.png",
      stock: 4,
    },
  ];

  return (
    <div className="w-full lg:w-[85%] mx-auto my-20 px-2 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-5 text-center text-sm ">
        {categoryData?.map((category, index) => (
          <div key={index} className="shadow-md rounded-md p-4 group ">
            <div className="w-1/2 mx-auto  mb-5 ">
              <img
                src={category.imgUrl}
                alt="category img"
                className="w-full md:group-hover:scale-150 md:group-hover:rotate-[360deg] duration-700 "
              />
            </div>
            <Link className="font-semibold group-hover:text-[#ca10ff] duration-500 ">
              {category.name}
            </Link>
            <p className="text-gray-500">{category.stock} Products </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;