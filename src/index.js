import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Country from './components/Country';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/country/:country" render={(props) => (
          <Country country={props.match.params.country} />
        )} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
