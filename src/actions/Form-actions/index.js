//form actions
export const nameChange = (name) => {
  return {
    type: 'NAME_CHANGE',
    payload: name
  };
};

export const NAME_VALID = (name) => {
  if (name.length > 5) {
    return {
      type: 'NAME_VALID',
      payload: true
    }
  } else {
    return {
      type: 'NAME_VALID',
      payload: false
    }
  }
}

export const ageChange = (num) => {
    return {
      type: 'AGE_CHANGE',
      payload: num
    }
};

export const AGE_VALID = (num) => {
  if (num <= 0) {
    return {
      type: 'AGE_VALID',
      payload: false
    }
  } else if (num > 0) {
    return {
      type: 'AGE_VALID',
      payload: true
    }
  }
}

export const cityChange = (name) => {
  return {
    type: 'CITY_CHANGE',
    payload: name
  };
};

export const CITY_VALID = (name) => {
  if (name.length < 5) {
    return {
      type: 'CITY_VALID',
      payload: false
    }
  } else if (name.length >= 5) {
    return {
      type: 'CITY_VALID',
      payload: true
    }
  }
}