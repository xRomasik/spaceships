export const addItemToCart = (cartItems, carrtItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === carrtItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === carrtItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...carrtItemToAdd, quantity: 1 }];
};


export const decreaseItemCount = (cartItems, decreaseCountOfItem) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === decreaseCountOfItem.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== decreaseCountOfItem.id)
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === decreaseCountOfItem.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
    );

};