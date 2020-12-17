import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

import './cart-icon.styles.scss'

const CartIcon = () => {

    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleCartHidden())
    }

    return (
        <div className='cart-icon' onClick={toggle} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;