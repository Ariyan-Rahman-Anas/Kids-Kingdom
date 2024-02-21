import SectionTitle from "../../Shared Components/SectionTitle";

const AddProductPage = () => {
  return (
    <div className="my-20  px-2">
      <SectionTitle
        title={"Add a Product"}
        subTitle={"Grow up the relationship by Adding Product"}
      ></SectionTitle>
      <div className="form  ">
        <div className="formInput grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-4 mb-4 ">
          <div>
            <input
              type="url"
              required
              placeholder="Image URL"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 ">
            <select
              name="Job_Category"
              className="bg-gray-200 focus:bg-purple-200 "
            >
              <option value="Actions_Toys">Action Toys</option>
              <option value="Pre-School_Toys">Pre-School Toys</option>
              <option value="Electronic_Toys">Electronic Toys</option>
              <option value="Educational_Toys">Educational Toys</option>
              <option value="Transport_Toys">Transport Toys</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Brand name"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="number"
              required
              placeholder="Price"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="number"
              required
              placeholder="Rating"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="px-[1.2rem] py-1.5 rounded-full w-full font-normal text-white bg-[#ca10ff] border-[.09rem] border-transparent hover:border-[#ca10ff] hover:text-[#ca10ff] hover:bg-white duration-500 "
        />
      </div>
    </div>
  );
};
export default AddProductPage;