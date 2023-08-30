
import {createSlice} from '@reduxjs/toolkit';

const showCartSlice= createSlice({
    name: 'showCart',
    initialState:{isVisible: false},
    reducers:{
        toggle(state){
            state.isVisible= !state.isVisible;
        }
    }
});

export const showCartActions= showCartSlice.actions;

export default showCartSlice;