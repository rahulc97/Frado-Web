import React from 'react';

import './DrawerToggle.scss';

const drawerToggle = (props) => (
    <div style={{  position: 'absolute',
        top: '10px'}}>
    <div className='DrawerToggle' onClick={props.clicked}>
        <div className='div'></div>
        <div className='div'></div>
        <div className='div'></div>
    </div>
    </div>
);

export default drawerToggle;