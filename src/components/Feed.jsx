import React from 'react'
import { connect } from 'react-redux'
import * as restauratActions from '../actions/restauratActions'

import Loader from './Loader'
import Input from './Input'
import Card from './Card'

const Feed = (props) => {
  const renderCollection = () => {
    if (!props.collection.length) {
      props.getCollection()
    }
    return <>
      {props.collection.map(item => (
        <Card
          key={`${item.id}-${item.contact.phone}`}
          item={item}
        />
      ))}
    </>
  }

  if (props.loading) {
    return <Loader />
  }

  return(
    console.log('render',props),
    <div className="feed">
      <Input />
      <div className="feed__items">
        {renderCollection()}
      </div>
    </div>
  )
}

const mapStateToProps = ({restaurantReducer}) => restaurantReducer

export default connect(mapStateToProps, restauratActions)(Feed)
