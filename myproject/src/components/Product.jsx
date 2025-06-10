import { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { data: products, status } = useSelector((state) => state.products);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-10 px-10 m-10">
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
};

export default Product;
