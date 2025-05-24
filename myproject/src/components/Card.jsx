import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CardSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div
      key={product.id}
      className="flex flex-col max-w-xs mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img
        className="w-full h-48 object-cover"
        src={product.images[0]}
        alt="Product"
      />
      <div className="p-4 flex flex-col bg-amber-300">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-indigo-600 font-bold text-lg">
            LKR {product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
