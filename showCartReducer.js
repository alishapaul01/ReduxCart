
import {createSlice} from '@reduxjs/toolkit';

const showCartSlice= createSlice({
    name: 'showCart',
    initialState:{isVisible: false, notification: null},
    reducers:{
        toggle(state){
            state.isVisible= !state.isVisible;
        },
        showNotification(state, action){
            state.notification={
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message}
        }
    }
});

export const showCartActions= showCartSlice.actions;

export default showCartSlice;