import { useEffect, useState } from "react";
import ProductCard from "../../Shared Components/ProductCard";
import SectionTitle from "../../Shared Components/SectionTitle";

const MyCartPage = () => {
  const [yourProducts, setYourProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setYourProducts(data));
  }, []);

  return (
    <div className="px-2 my-10 ">
      <SectionTitle
        title={"YOUR PRODUCTS"}
        subTitle={`You've added total ${yourProducts.length} product!`}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        {yourProducts?.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};
export default MyCartPage;
