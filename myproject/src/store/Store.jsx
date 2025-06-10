import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CardSlice";
import productSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});
export default store;
