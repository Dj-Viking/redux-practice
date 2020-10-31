import React from 'react';
// import { useSelector } from 'react-redux';
import Form from './components/Form';
import AudioPlayer from './components/AudioPlayer';
import Counter from './components/Counter';
import Login from './components/Login';

function App() {

  /**
   * allow use of reducer functions by the name of the
   * 
   * action in which the reducer holds 
   * @params {Function} action function you want to invoke and any parameters that action function takes
   * 
   * @example dispatch(action(payloadObject))
   */

  return (
    <div className="App">
      <AudioPlayer />
      <Counter />
      <Login />
      <Form />
    </div>
  );
}

export default App;
