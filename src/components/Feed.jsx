import React from 'react'
import { connect } from 'react-redux'
import * as restauratActions from '../actions/restauratActions'

import Input from './Input'
import Card from './Card'

const Feed = (props) => {
  const getCollection = () => {
    !props.collection.length && props.getCollection()
  }

  return(
    console.log('render',props),
    <div className="feed">
      {getCollection()}
      <Input />
      <div className="feed__items">
        {props.collection.length
          ? (
            <>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </>
          )
          : null
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({restaurantReducer}) => restaurantReducer

export default connect(mapStateToProps, restauratActions)(Feed)
