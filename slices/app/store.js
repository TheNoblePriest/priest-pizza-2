import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";
import basketReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketReducer,
  },
});
