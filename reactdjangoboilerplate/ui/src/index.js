import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';

import reportWebVitals from './reportWebVitals';

// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { combineReducers } from 'redux'

// these key names will be used in the components as the state props get split into different sections
// const rootReducer = combineReducers({

// })



// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// const newStore = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={newStore}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
