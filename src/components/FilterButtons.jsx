import React from 'react'
import { connect } from 'react-redux'
import * as filterActions from '../actions/filterActions'

import Button from './Button'

const FilterButtons = (props) => {
  const handleRating = () => props.ratingOrder()
  const handleAlphabetical = () => props.alphabeticalOrder()
  const handleFavorites = () =>  props.turnSaved()

  return(
    <section className="filter">
      <h3>
        Acelera tu busqueda y ecuentra el mejor lugar para hoy.
      </h3>
      <div className="filter__buttons">
        <Button
          title="RATING"
          onClick={() => handleRating()}
          typeStyle="normal"
          size="10px 0"
          border="15px"
        />
        <Button
          title="A - Z"
          onClick={() => handleAlphabetical()}
          typeStyle="normal"
          size="10px 0"
          border="15px"
        />
        <Button
          title="FAVORITOS"
          onClick={() => handleFavorites()}
          typeStyle="normal"
          size="10px 0"
          border="15px"
        />
      </div>
    </section>
  )
}

const mapStateToProps = ({restaurantReducer}) => restaurantReducer

export default connect(mapStateToProps, filterActions)(FilterButtons)