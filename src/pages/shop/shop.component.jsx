import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections.overview.container';
import CollectionPageContainer from '../collection/collection.container';

import './shop.styles.scss'

const Shop = ({ match }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCollectionsStart())
    }, [dispatch])

    return (
        <div className='shop'>
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    )
};

export default Shop;