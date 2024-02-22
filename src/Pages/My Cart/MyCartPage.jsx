import { useEffect, useState } from "react";
import SectionTitle from "../../Shared Components/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import PrimaryBtn from "../../Shared Components/PrimaryBtn";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyCartPage = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [yourProducts, setYourProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/products?email=${email}`)
      .then((res) => res.json())
      .then((data) => setYourProducts(data));
  }, [email]);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  // updatingCartItem
  const handleUpdateItem = (id) => {
    fetch(`http://localhost:5001/products/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Update Successful!");
          const remaining = yourProducts.filter(
            (product) => product._id !== id
          );
          const updated = yourProducts.find((product) => product._id === id);
          updated.status = "Confirmed";
          const newProducts = [updated, ...remaining];
          setYourProducts(newProducts);
        }
      });
  };

  //deleting cart item
  const handleDeleteCartItem = (id) => {
    // swl2 starts from here
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Confirm it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5001/products/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                // alert("Deleted!")
                const remainingCartItems = yourProducts.filter(
                  (product) => product._id !== id
                );
                setYourProducts(remainingCartItems);
              }
            });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Product has been Deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your added product is in the safe zone :)",
            icon: "error",
          });
        }
      });
    // swl2 ends here
  };

  return (
    <div className="px-2 my-10 ">
      <div>
        {yourProducts?.length > 0 ? (
          <>
            {" "}
            <SectionTitle
              title={"YOUR PRODUCTS"}
              subTitle={`You've added total ${yourProducts.length} products yet!`}
            ></SectionTitle>{" "}
          </>
        ) : (
          <>
            <SectionTitle
              title={"YOU'VE NOT ADD ANY PRODUCT YET"}
              subTitle={`Your added products will be show in here!`}
            ></SectionTitle>{" "}
          </>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {yourProducts?.map((product, index) => (
          <div
            key={index}
            className="shadow-md rounded-md text-center p-2 hover:shadow-lg border-[.09rem] border-purple-200 duration-500 "
          >
            <div className="shadow-md rounded-md p-2 mb-5 ">
              <img
                src={product.imgUrl}
                alt="product img"
                className="w-full rounded-md  "
              />
            </div>
            <h1 className="text-2xl">{product.name} </h1>
            <div className="flex items-center justify-around my-2 ">
              <p>{product.rating}</p>
              <p>{product.price}</p>
            </div>
            <p>{product.details}</p>
            <div className="mt-5 pb-1 flex items-center justify-between gap-5 ">
              <button onClick={() => handleUpdateItem(_id)}>
                <PrimaryBtn
                  value={"Update"}
                  link={"/updateProduct"}
                ></PrimaryBtn>
              </button>
              <button onClick={() => handleDeleteCartItem(product._id)}>
                <PrimaryBtn value={"Delete"}></PrimaryBtn>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyCartPage;