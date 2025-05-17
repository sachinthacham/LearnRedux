import { useState, useEffect } from "react";
import Card from "./Card";
import { fetchProductDetails } from "../services/BackendServices";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductDetails();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-10 px-10 m-10">
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
};

export default Product;
