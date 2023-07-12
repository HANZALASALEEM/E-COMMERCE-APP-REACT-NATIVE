const {createSlice} = require('@reduxjs/toolkit');

const ProductsSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    addProducts(state, action) {
      state.data = action.payload;
    },
  },
});
export const {addProducts} = ProductsSlice.actions;
export default ProductsSlice.reducer;
