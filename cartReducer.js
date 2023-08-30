
import {createSlice} from '@reduxjs/toolkit';

const cartSlice= createSlice({
    name: 'cart',
    initialState:{items:[], totalQuantity:0, totalAmount:0},
    reducers:
    {
        addtocart(state, action){
            const newItem= action.payload;
            const existingItem= state.items.find(item=> item.id === newItem.id)
            state.totalQuantity++; 
            if (!existingItem){
                state.items.push({
                    itemId: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice= existingItem.totalPrice+ newItem.price;
            }

        }
        
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice;
