const {configureStore} = require('@reduxjs/toolkit');

import ProductReducer from './slice/ProductSlice';
import WishlistReducer from './slice/WishlistSlice';
import CartReducer from './slice/CartSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    wishlist: WishlistReducer,
    cart: CartReducer,
  },
});
