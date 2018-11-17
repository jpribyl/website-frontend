//@format
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import indexRoutes from './routes/index.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css?v=1.2.0';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';
import './assets/css/react-datepicker.css';
import './assets/css/react-table.css';
import './assets/css/react-select.css';

import reducers from './reducers';
import {DJANGO_ROOT} from './config';
import './fontawesome';

console.log('<frontend/src/index.js> django root url: ' + DJANGO_ROOT);
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

//I have denied CORS access, so this will verify that the request originated from the portal
async function authenticate() {
  try {
    const credentials = await fetch(DJANGO_ROOT);
    ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <HashRouter>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route to={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </HashRouter>
      </Provider>,
      document.getElementById('root')
    );
    console.log(
      '<frontend/src/index.js> credentials status: ' + credentials.status
    );
  } catch (e) {
    /* handle error */
    console.log('<frontend/src/index.js> no credentials, please log in');
    window.location.href = DJANGO_ROOT;
  }
}

const app = authenticate();
