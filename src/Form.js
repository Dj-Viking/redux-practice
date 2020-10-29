import React from 'react';
import { 
  nameChange, ageChange, cityChange,
  NAME_VALID, AGE_VALID, CITY_VALID
} from './actions';
import { useSelector, useDispatch } from 'react-redux';

const Form = () => {
  //observe global state
  //also save into an idb on first load 
  const formState = useSelector(state => state.form);

  const { nameIsValid, ageIsValid, cityIsValid } = formState;

  //console.log(nameIsValid, ageIsValid, cityIsValid);

  function enableSubmit() {
    if (nameIsValid && ageIsValid && cityIsValid) {
      return false;
    } else {
      return true;
    }
  }

  //get all dispatch actions to trigger reducer functions
  // to replace state
  const dispatch = useDispatch();
  return (
    <>
      <form>
        <input type="text" placeholder="name"
          onChange={(e) => {
            dispatch(nameChange(e.target.value));
            dispatch(NAME_VALID(e.target.value));
          }}
        ></input>
        <input 
          type="number" 
          value={formState.age}
          placeholder="age"
          onChange={(e) => {
            dispatch(ageChange(e.target.value))
            dispatch(AGE_VALID(e.target.value))
          }}
        ></input>
        <input type="text" placeholder="city"
          onChange={(e) => {
            dispatch(cityChange(e.target.value))
            dispatch(CITY_VALID(e.target.value))
          }}
        ></input>
        <button type="submit"
          disabled={enableSubmit()}
        >Submit</button>
      </form>
      <pre>Form State:</pre>
      <pre>{JSON.stringify(formState, null, 4)}</pre>
    </>
  );
};

export default Form;