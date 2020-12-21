import CollectionItem from '../../components/collection-item/collection-item.component';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector'

import './collection.styles.scss'

const CollectionPage = ({ match }) => {

    const collection = useSelector((state) => selectCollection(match.params.collectionId)(state))
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title} </h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPage;
