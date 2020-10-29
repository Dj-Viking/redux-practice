import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker.js';

//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
// serviceWorker.unregister();


// //STORE -> GLOBALIZED STATE

// //ACTION INCREMENT
// //function that returns an object
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }


// //REDUCER
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default: 
//       return state
//   }
// }
// let store = createStore(counter);
// //display to console.
// store.subscribe(() => console.log(store.getState()));


// //DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());