import './checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import { removeItem, decreaseCount, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem
    const dispatch = useDispatch()

    const removeItemFromCart = (item) => {
        return (dispatch(removeItem(item)))
    }

    const decreaseItemCount = (item) => {
        return (dispatch(decreaseCount(item)))
    }

    const increaseItemCount = (item) => {
        return (dispatch(addItem(item)))
    }


    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseItemCount(cartItem)} >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => increaseItemCount(cartItem)} >&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>

        </div>

    )
}

export default CheckoutItem;