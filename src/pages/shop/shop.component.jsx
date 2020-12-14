import React, { useState } from 'react';
import SHOP_DATA from './shopData'
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import './shop.styles.scss'

const Shop = () => {

    const [spaceships] = useState(SHOP_DATA)

    return (
        <div className='shop'>
            <h1>SPACESHIPS</h1>
            {
                spaceships.map(({ id, ...otherSpaceshipProps }) => {
                    return (<PreviewCollection key={id} {...otherSpaceshipProps} />)
                })
            }
        </div>
    )


}

export default Shop;