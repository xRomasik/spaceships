import PreviewCollection from '../preview-collection/preview-collection.component';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import './collections-overview.styles.scss'

const CollectionsOverview = () => {

    const spaceships = useSelector(state => selectCollectionsForPreview(state))

    return (
        <div className='collection-overview'>
            {spaceships.map(({ id, ...otherSpaceshipProps }) => {
                return (<PreviewCollection key={id} {...otherSpaceshipProps} />)
            })
            }
        </div>
    )
};

export default CollectionsOverview;