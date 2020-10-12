const INITIAL_STATE = {
  collection: [],
  saved: [],
  error: undefined,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        // loading: false
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'getCollection':
      return {
        ...state,
        collection: action.payload,
        error: undefined,
        loading: false
      }
    default: return state
  }
}