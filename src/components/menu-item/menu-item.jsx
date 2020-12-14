import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div
            className={`menu-item ${size}`}
            onClick={() => history.push(`${linkUrl}`)}
        >
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div >
    )
}

export default withRouter(MenuItem);

// Dunno why this doesnt work onClick={() => history.push(`${match.url}${linkUrl}`)}