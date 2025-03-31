import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const product = action.payload;
      if (!state.favourites.find(item => item.id === product.id)) {
        state.favourites.push(product);
      }
    },
    removeFavourite: (state, action) => {
      const productId = action.payload;
      state.favourites = state.favourites.filter(item => item.id !== productId);
    },
  },
});

export const selectFavouriteProductIds = (state) => state.sliceFavourite.favourites.map((prod) => prod.id);

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
