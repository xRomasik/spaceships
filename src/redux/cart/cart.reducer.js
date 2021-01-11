import { cartActionTypes } from './cart.types';
import { addItemToCart, decreaseItemCount } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state, cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartActionTypes.DECREASE_ITEM_COUNT_BY_ONE:
            return {
                ...state, cartItems: decreaseItemCount(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state;
    }
}


export default cartReducer;