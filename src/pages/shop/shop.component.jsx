import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'

import './shop.styles.scss'

const Shop = ({ match }) => {
    console.log(match)
    return (
        <div className='shop'>
            <h1>SPACESHIPS</h1>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
};

export default Shop;