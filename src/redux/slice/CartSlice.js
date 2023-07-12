const {createSlice} = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart(state, action) {
      let tempData = state.data;
      let isItemExist = false;
      tempData.map(item => {
        if (item.id == action.payload.id) {
          isItemExist = true;
          item.quantity = item.quantity + 1;
        }
      });
      if (!isItemExist) {
        tempData.push(action.payload);
      }

      state.data = tempData;
    },
    reduceItemToCart(state, action) {
      let tempData = state.data;

      tempData.map(item => {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
        }
      });

      state.data = tempData;
    },
    removeItemToCart(state, action) {
      let tempData = state.data;
      tempData.splice(action.payload, 1);
      state.data = tempData;
    },
  },
});
export const {addItemToCart, removeItemToCart, reduceItemToCart} =
  cartSlice.actions;
export default cartSlice.reducer;
