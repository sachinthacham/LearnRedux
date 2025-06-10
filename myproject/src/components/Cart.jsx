import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CardSlice";

const Card = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative">
            <img
              className="w-full h-40 object-cover"
              src={product.images[0]}
              alt={product.title}
            />
            <div className="absolute top-2 right-2">
              <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                New
              </span>
            </div>
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="mt-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  LKR {product.price.toLocaleString()}
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    In Stock
                  </span>
                </div>
              </div>

              <button
                onClick={() => removeToCart(product.id)}
                className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
