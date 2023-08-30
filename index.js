
import cartSlice from "./cartReducer";
import showCartSlice from "./showCartReducer";

import { configureStore } from "@reduxjs/toolkit";

const store= configureStore({
    reducer: { showCart: showCartSlice.reducer, cart: cartSlice.reducer }
});

export default store;