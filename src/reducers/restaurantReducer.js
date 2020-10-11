const INITIAL_STATE = {
  collection: [],
  saved: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'getCollection':
      return {
        ...state,
        collection: action.payload
      }
    default: return state
  }
}