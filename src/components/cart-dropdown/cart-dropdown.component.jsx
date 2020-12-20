import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions'


import './cart-dropdown.styles.scss'

const CartDropdown = ({ history }) => {

    const cartItems = useSelector(state => selectCartItems(state))
    const dispatch = useDispatch();

    const hideCartWhenLoadingPage = () => {
        dispatch(toggleCartHidden())
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        :
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                hideCartWhenLoadingPage()
            }
            }>
                GO TO CHECKOUT
            </CustomButton>
        </div >
    )
}

export default withRouter(CartDropdown);