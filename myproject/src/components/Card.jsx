import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CardSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          src={product.images[0]}
          alt={product.title}
        />
        <div className="absolute top-4 right-4">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            New
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              LKR {product.price.toLocaleString()}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                In Stock
              </span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
