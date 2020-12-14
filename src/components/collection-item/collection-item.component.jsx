import './collection-item.styles.scss'

const CollectionItem = ({ name, imageUrl, price }) => {
    return (
        <div className='collection-item'>
            <div style={{ backgroundImage: `url(${imageUrl}}` }} className='item-image'>
                <button className='add-to-cart'> ADD TO CART</button>
            </div>
            <div className='item-information'>
                <span className='item-name'>{name}</span>
                <span className='item-price'>{`${price}$`}</span>
            </div>
        </div >
    )
}

export default CollectionItem;