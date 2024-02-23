import { useEffect, useState } from "react";
import SectionTitle from "../../Shared Components/SectionTitle";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProductPage = () => {
  const [updateProduct, setUpdateProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id is,,,", id);

  const {
    email,
    yourName,
    imgUrl,
    type,
    brandName,
    name,
    price,
    rating,
    details,
  } = updateProduct;
  useEffect(() => {
    fetch(`https://kids-kingdom-back-1wo2dzovz-anas4.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateProduct(data);
      });
  }, [id]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const yourName = form.yourName.value;
    const imgUrl = form.imgUrl.value;
    const type = form.type.value;
    const brandName = form.brandName.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;

    const updatedProduct = {
      email,
      yourName,
      type,
      imgUrl,
      brandName,
      name,
      price,
      rating,
      details,
    };
    console.log(updatedProduct);

    fetch(
      `https://kids-kingdom-back-1wo2dzovz-anas4.vercel.app/products/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        navigate("/myCart");
        console.log("updated", data);
        if (data.modifiedCount > 0) {
          toast("Updated successfully.");
        }
      });
  };

  return (
    <div className="my-20  px-2">
      <SectionTitle
        title={"Update Product"}
        subTitle={"Grow up the relationship by Adding Product"}
      ></SectionTitle>
      <form onSubmit={handleUpdateProduct} className="form  ">
        <div className="formInput grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-4 mb-4 ">
          <div>
            <input
              type="text"
              required
              name="yourName"
              placeholder="Your name"
              defaultValue={yourName}
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="text"
              required
              name="email"
              placeholder="Your email"
              defaultValue={email}
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="url"
              name="imgUrl"
              required
              placeholder="Image URL"
              defaultValue={imgUrl}
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 ">
            <select
              name="type"
              defaultValue={type}
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
              name="brandName"
              placeholder="Brand name"
              defaultValue={brandName}
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              defaultValue={name}
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="number"
              required
              name="price"
              placeholder="Price"
              defaultValue={price}
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
          <div>
            <input
              type="number"
              required
              name="rating"
              defaultValue={rating}
              placeholder="Rating"
              className="w-full p-2 rounded-md bg-gray-200 focus:outline-none focus:bg-purple-200 "
            />
          </div>
        </div>
        <textarea
          name="details"
          cols="30"
          rows="5"
          defaultValue={details}
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

export default UpdateProductPage;
