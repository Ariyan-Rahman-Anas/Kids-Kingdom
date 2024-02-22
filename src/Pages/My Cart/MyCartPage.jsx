import { useEffect, useState } from "react";
import ProductCard from "../../Shared Components/ProductCard";
import SectionTitle from "../../Shared Components/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCartPage = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [yourProducts, setYourProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/products?email=${email}`)
      .then((res) => res.json())
      .then((data) => setYourProducts(data));
  }, [email]);

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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        {yourProducts?.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};
export default MyCartPage;