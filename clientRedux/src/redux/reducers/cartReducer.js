import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import alertify  from 'alertifyjs';

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            let addedItem = state.find(c => c.product.productID === action.payload.product.productID)
            if (addedItem) {
                let newState = state.map(cartItem => {
                    if (cartItem.product.productID === action.payload.product.productID) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity += 1 })

                    }
                    return cartItem;
                })
                return newState;
            } else {
                return [...state, { ...action.payload }]
            }
        case actionTypes.REMOVE_FROM_CART:
            const newState2 = state.filter(cartItem => cartItem.product.productID !== action.payload.productID)
            alertify.error(" Items deleted.",1)
            console.log(state)

            return newState2;
        default:
            return state;
    }
}