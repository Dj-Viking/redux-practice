const formReducer = (
  state = {
    name: '',
    nameIsValid: false,
    age: 0,
    ageIsValid: false,
    city: '',
    cityIsValid: false
}, action) => 
{
  switch(action.type) {
    case 'NAME_CHANGE':
      return {
        ...state,
        name: action.payload
      }
    case 'AGE_CHANGE':
      if (+action.payload < 0) return state
      return {
        ...state,
        age: action.payload
      }
    case 'CITY_CHANGE':
      return {
        ...state,
        city: action.payload
      }
    case 'NAME_VALID': 
      return {
        ...state,
        nameIsValid: action.payload//true or false depending on the action condition
      }
    case 'AGE_VALID':
      return {
        ...state,
        ageIsValid: action.payload//true or false depending on the action condition
      }
    case 'CITY_VALID':
      return {
        ...state,
        cityIsValid: action.payload//true or false depending on the action condition
      }
    default:
      return state;
  }
}

export default formReducer;