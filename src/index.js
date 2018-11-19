//@format
import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import indexRoutes from './routes';
import './assets/css/index.css';
import './assets/css/App.css';
import './assets/css/toggle-switch.css';
import './assets/css/awesome-button.css';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <Switch>
        {indexRoutes.map((prop, key) => {
          console.log(prop);
          console.log(key);
          return <Route to={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
