const courseReducer = (state = [], action) => {
  if (action.type === 'CREATE_COURSE') {
    return [...state, Object.assign({}, action.course)]
  } else {
    return state
  }
}

export default courseReducer
