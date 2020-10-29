import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './actions';
import Form from './Form.js';

function App() {
  //observe global state
  const counterState = useSelector(state => state.counter);
  const isLoggedInState = useSelector(state => state.isLoggedIn);

  /**
   * allow use of reducer functions by the name of the
   * 
   * action in which the reducer holds 
   * @params {Function} action function you want to invoke and any parameters that action function takes
   * 
   * @example dispatch(action(payloadObject))
   */
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counterState}</h1>
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
        isLoggedInState
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
      <Form />
    </div>
  );
}

export default App;
