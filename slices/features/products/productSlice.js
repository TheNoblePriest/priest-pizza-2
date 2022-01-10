import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Nepolian Pizza",
  id: 1,
  image: "/img/pizza.png",
  price: 240,
  description:
    "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sendProduct: (state, action) => {
      (state.id = action.payload.id),
        (state.name = action.payload.name),
        (state.image = action.payload.image),
        (state.price = action.payload.price);
      state.description = action.payload.description;
    },
  },
});

export const { sendProduct } = productSlice.actions;

export const selectId = (state) => state.product.id;
export const selectName = (state) => state.product.name;
export const selectImage = (state) => state.product.image;
export const selectRating = (state) => state.product.rating;
export const selectPrice = (state) => state.product.price;
export const selectDescription = (state) => state.product.description;

export default productSlice.reducer;
