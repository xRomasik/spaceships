import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { useDispatch, useSelector } from 'react-redux';

import './cart-icon.styles.scss'

const CartIcon = () => {

    const dispatch = useDispatch();
    const itemCount = useSelector(state => {
        return selectCartItemsCount(state)
    })

    const toggle = () => {
        dispatch(toggleCartHidden())
    }

    return (
        <div className='cart-icon' onClick={toggle} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

export default CartIcon;