const ProductCard = ({ product }) => {
  const { imgUrl, type, brnadName, name, price, rating, details } =
    product || {};
  return (
    <div className="shadow-md rounded-md text-center ">
      <div>
        <img src={imgUrl} alt="product img" className="w-full rounded-md  " />
      </div>
      <h1>{name} </h1>
    </div>
  );
};

export default ProductCard;
