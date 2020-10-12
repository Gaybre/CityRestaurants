const INITIAL_STATE = {
  collection: [],
  saved: [],
  showSaved: false,
  rating: false,
  alphabetical: false,
  error: undefined,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
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
    case 'ratingOrder':
      return {
        ...state,
        collection: action.payload,
        alphabetical: true,
        rating: false,
        showSaved: false,
        loading: false
      }
    case 'alphabeticalOrder':
      return {
        ...state,
        collection: action.payload,
        rating: true,
        alphabetical: false,
        showSaved: false,
        loading: false
      }
    case 'turnSaved':
      return {
        ...state,
        showSaved: true,
        alphabetical: false,
        rating: false,
      }
    case 'saveItem':
      return {
        ...state,
        saved: [].concat(state.saved, action.payload)
      }
    default: return state
  }
}