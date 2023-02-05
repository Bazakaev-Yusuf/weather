import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


import App from './App';


const initialState = {
  arr: {
  },
  loading: true,
  btnSwitch: false,
  city: 'Grozny',
  error: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'data':
      return {
        ...state,
        arr: action.payload,
        loading: false,
        error: false
      }
    case 'switch':
      return {
        ...state,
        btnSwitch: !state.btnSwitch
      }
    case 'cityName':
      return {
        ...state,
        city: action.payload
      }
    case 'error':
      return{
        ...state,
        error: action.payload
      }
    case 'error-btn':
      return{
        ...state,
        error: false
      }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

