import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import IndexPage from './pages/index-page';
import HomePage from './pages/home-page';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* pages */}
      <Route exact path='/' component={IndexPage}></Route>
      <Route path='/home' component={HomePage}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
