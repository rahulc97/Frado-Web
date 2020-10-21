import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import SideDrawer from './components/SideDrawer/sideDrawer';
import MainPage from './containers/MainPage/MainPage';
import Register from './containers/RegisterPage/Register';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  const [sideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };
  const toggleSideDrawer=()=>{
    setShowSideDrawer(state=>!state);
  }
  return (
    <div className="App">
      <SideDrawer drawerToggleClicked={toggleSideDrawer} show={sideDrawer} closed={sideDrawerClosedHandler} />
      <div className='desktopOnly'>
        <NavigationBar />
      </div>
      <Switch>
        <Route path="/register" component={Register} />
        <Route strict path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
