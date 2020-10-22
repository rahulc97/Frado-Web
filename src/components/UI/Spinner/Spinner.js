import React from 'react';

import './Spinner.scss';

const Spinner = (props) => (
    props.show ? <div className='Backdrop' onClick={props.clicked}><div className="loader" >Loading...</div></div> : null
);

export default Spinner;