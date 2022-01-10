import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pName: "Nepolian Pizza",
  pId: 1,
  pImage: "/img/pizza.png",
  pPrice: 240,
  pDescription:
    "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    sendProduct: (state, action) => {
      (state.pId = action.payload.pId),
        (state.pName = action.payload.pName),
        (state.pImage = action.payload.pImage),
        (state.pPrice = action.payload.pPrice);
      state.pDescription = action.payload.pDescription;
    },
  },
});

export const { sendProduct } = productSlice.actions;

export const selectPId = (state) => state.product.pId;
export const selectPName = (state) => state.product.pName;
export const selectPImage = (state) => state.product.pImage;
export const selectPRating = (state) => state.product.pRating;
export const selectPPrice = (state) => state.product.pPrice;
export const selectPDescription = (state) => state.product.pDescription;

export default productSlice.reducer;
