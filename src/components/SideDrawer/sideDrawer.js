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
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="/about"> About Us</a>
            </li>
            <li>
              <a href="/contact"> Contact Us</a>
            </li>
            <li>
              <a href="/register"> Register Now</a>
            </li>
          </nav>
        </div>
      
    </Aux>
  );
};

export default sideDrawer;
