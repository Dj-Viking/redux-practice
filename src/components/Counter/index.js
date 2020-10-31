import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions/Counter-actions';


const Counter = () => {
    const counterState = useSelector(state => state.counter);
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
    <>
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
    </>
  );
}

export default Counter;
