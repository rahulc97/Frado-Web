import React from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';
import Logo from '../../assets/fradoLogo.jpg';
import './sideDrawer.scss';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const sideDrawer = (props) => {
  let attachedClasses=["sideDrawer","close"];
  if(props.show){
    attachedClasses=["sideDrawer","open"];
  }
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closed}/>
     <DrawerToggle  clicked={props.drawerToggleClicked}/>
        <div className={attachedClasses.join(' ')}>
          <img className="logo" src={Logo} alt="logo" />
          <nav>
            <li className='drawerItem'>
              <a href="/" className='drawerLink'> Home</a>
            </li>
            <li className='drawerItem'>
              <a href="/about" className='drawerLink'> About Us</a>
            </li>
            <li className='drawerItem'>
              <a href="/contact" className='drawerLink'> Contact Us</a>
            </li>
            <li className='drawerItem'>
              <a href="/register" className='drawerLink'> Register Now</a>
            </li>
          </nav>
        </div>
      
    </Aux>
  );
};

export default sideDrawer;
