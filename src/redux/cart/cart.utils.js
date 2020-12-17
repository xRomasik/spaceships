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
}