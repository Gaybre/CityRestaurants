export const getCollection = () => (dispatch) => {
  dispatch({
    type: 'getCollection',
    payload: [1,2,3]
  })
}