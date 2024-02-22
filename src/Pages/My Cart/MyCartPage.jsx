import { useEffect, useState } from "react";
import ProductCard from "../../Shared Components/ProductCard";

const MyCartPage = () => {

    const [yourProducts, setYourProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5001/products")
            .then(res => res.json())
        .then(data=>setYourProducts(data))
    },[])

    return (
      <div>
        <div>
          {yourProducts?.map((product, index) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};
export default MyCartPage;