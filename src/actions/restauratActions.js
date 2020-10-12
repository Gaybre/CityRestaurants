import { DATA } from '../Data'
export const getCollection = () => async (dispatch) => {
  // const API_URL = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'
  // const OPTIONS = {
  //   method: 'GET',
  //   mode: 'no-cors',
  //   headers: { 'Content-Type': 'application/json' }
  // };

  dispatch({
    type: 'LOADING',
  });

  try {
    // const response = await fetch(API_URL, OPTIONS)
    // const result = await response.json()
    // console.log(result)
    setTimeout(() => {
      dispatch({
        type: 'getCollection',
        // payload: result
        payload: DATA
      })
    }, 800)
  } catch(error) {
    dispatch({
      type: 'ERROR',
      payload: error.message
    })
  }
}

export const saveItem = (item) => (dispatch, getState) => {
  const {saved} = getState().restaurantReducer
  if (!saved.includes(item)) {
    dispatch({
      type: 'saveItem',
      payload: item
    });
  }
  return
}
