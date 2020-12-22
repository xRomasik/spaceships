import CustomButton from '../custom-button/custom-button.component';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss'

const CollectionItem = ({ item }) => {
    const { imageUrl, name, price } = item;
    const dispatch = useDispatch();

    const addItemFunc = item => {
        return dispatch(addItem(item))
    }

    return (
        <div className='collection-item'>
            <div style={{ backgroundImage: `url(${imageUrl}}` }} className='item-image'>
            </div>
            <div className='item-information'>
                <span className='item-name'>{name}</span>
                <span className='item-price'>{`${price}$`}</span>
            </div>
            <CustomButton className='custom-button' onClick={() => addItemFunc(item)} inverted>Add to cart</CustomButton>
        </div >
    )
}

export default CollectionItem;