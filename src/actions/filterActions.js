export const ratingOrder = () => (dispatch, getState) => {
  dispatch({
    type: 'LOADING'
  })

  const {collection} = getState().restaurantReducer
  const order = collection.sort((a, b) => {
    return(
      b.rating - a.rating
    )
  })
  dispatch({
    type: 'ratingOrder',
    payload: order
  })
}

export const alphabeticalOrder = () => (dispatch, getState) => {
  dispatch({
    type: 'LOADING'
  })

  const {collection} = getState().restaurantReducer
  const order = collection.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })
  dispatch({
    type: 'alphabeticalOrder',
    payload: order
  })
}

export const turnSaved = () => (dispatch) => {
  dispatch({
    type: 'turnSaved'
  })
}
