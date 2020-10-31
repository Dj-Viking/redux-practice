import React from 'react';
import {login, logout} from '../../actions/isLogged-actions';

//REDUX
import {useSelector, useDispatch} from 'react-redux';


const Login = () => {
  const isLoggedInState = useSelector(state => state.isLoggedIn);
  console.log(isLoggedInState);
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
    </>
  );
};

export default Login;

