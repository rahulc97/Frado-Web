import React from 'react';
import { Route ,Switch} from 'react-router-dom';

import './App.scss';
import MainPage from './containers/MainPage/MainPage';
import Register from './containers/RegisterPage/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register} />
        <Route strict path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
