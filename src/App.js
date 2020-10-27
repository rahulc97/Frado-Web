import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import SideDrawer from './components/SideDrawer/sideDrawer';
import MainPage from './containers/MainPage/MainPage';
import Register from './containers/RegisterPage/Register';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AdminPage from './containers/AdminPage/AdminPage';
import ContactUs from './containers/ContactUs/ContactUs';
import AboutUs from './containers/AboutUs/AboutUs';

function App() {
  const [sideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };
  const toggleSideDrawer = () => {
    setShowSideDrawer((state) => !state);
  };
  return (
    <div className="App">
      <SideDrawer
        drawerToggleClicked={toggleSideDrawer}
        show={sideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <div className="desktopOnly">
        <NavigationBar />
      </div>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
        <Route
          path="/frado_admin/5f919e6dcac4a5da16a36f04/users"
          component={AdminPage}
        />
        <Route strict path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
