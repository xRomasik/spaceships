import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>


                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SpaceX</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Nasa</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Blue Origin</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Virgin Galactic</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>ESA</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;