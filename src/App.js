import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './actions';

function App() {
  //observe global state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  //allow use of all actions that trigger a reducer based
  // on the action function
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(increment(10))
        }}
      >
        increment + 
      </button>
      <button
        onClick={() => {
          dispatch(decrement(1000))
        }}
      >
        decrement - 
      </button>
      {
        isLogged
        ?
        (
          <div>
            <h3>CLICK TO LOGOUT</h3>
            <button
              onClick={() => {
                dispatch(logout())
              }}
            >
              LOGOUT
            </button>
          </div>
        )
        :
        (
          <div>
            <h3>CLICK TO LOGIN</h3>
            <button
              onClick={() => {
                dispatch(login())
              }}
            >
              LOGIN
            </button>
          </div>
        )
      }
    </div>
  );
}

export default App;
