import React from 'react'
import Icon from './Icon'

const RatingStars = ({rating, id}) => {

  const getRating = (rating) => {
    switch (rating) {
      case 1:
        return [1,0,0,0,0]
      case 2:
        return [1,1,0,0,0]
      case 3:
        return [1,1,1,0,0]
      case 4:
        return [1,1,1,1,0]
      case 5:
        return [1,1,1,1,1]
      default:
        return [0,0,0,0,0]
    }
  }

  const choseStarIcon = (isActive) => {
    if(isActive) {
      return <Icon type="star-on" color="gold" />
    }
    return <Icon type="star-of" color="gold" />
  }

  const getStars = (starsNumber) => {
    let count = 1
    return starsNumber.map(item => (
      count++,
      <span key={`${id}-${count}`}>
        {choseStarIcon(item)}
      </span>
    ))
  }

  const renderStars = () => {
    const starsNumber = getRating(rating)
    const stars = getStars(starsNumber)
    return stars
  }

  return(
    <>
      {renderStars()}
    </>
  )
}

export default RatingStars