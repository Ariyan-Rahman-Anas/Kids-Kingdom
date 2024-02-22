import { useNavigate } from "react-router-dom";
import SectionTitle from "../../Shared Components/SectionTitle";
import toast from "react-hot-toast";

const AddProductPage = () => {

  const navigate = useNavigate()
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const imgUrl = form.imgUrl.value;
    const type = form.type.value;
    const brandName = form.brandName.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value

    const addedProductInfo = {
      imgUrl,
      type,
      brandName,
      name,
      price,
      rating, details
    };
    console.log(addedProductInfo);
    form.reset()

    fetch(`http://localhost:5001/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProductInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully added the product!");
          navigate("/myCart");
        }
      });
  };

  return (
    <div className="my-20  px-2">
      <SectionTitle
        title={"Add a Product"}
        subTitle={"Grow up the relationship by Adding Product"}
      ></SectionTitle>
      <form onSubmit={handleSubmitForm} className="form  ">
        <div className="formInput grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-4 mb-4 ">
          <div>
            <input
              type="url"
              name="imgUrl"
              required
              placeholder="Image URL"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 ">
            <select name="type" className="bg-gray-200 focus:bg-purple-200 ">
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
              name="brandName"
              placeholder="Brand name"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="number"
              required
              name="price"
              placeholder="Price"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="number"
              required
              name="rating"
              placeholder="Rating"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
        </div>
        <textarea
          name="details"
          cols="30"
          rows="5"
          placeholder="Write about your product..."
          className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
        ></textarea>
        <input
          type="submit"
          value="Add Product"
          className="px-[1.2rem] py-1.5 rounded-full w-full font-normal text-white bg-[#ca10ff] border-[.09rem] border-transparent hover:border-[#ca10ff] hover:text-[#ca10ff] hover:bg-white duration-500 cursor-pointer "
        />
      </form>
    </div>
  );
};
export default AddProductPage;