import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CardSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
