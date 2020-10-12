import React from 'react'
import { connect } from 'react-redux'
import * as restauratActions from '../actions/restauratActions'

import Loader from './Loader'
// import Input from './Input'
import Card from './Card'
import FilterButtons from './FilterButtons'

const Feed = (props) => {
  const saveItem = (card) => props.saveItem(card)
  const renderCollection = () => {
    if (!props.collection.length) {
      props.getCollection()
    }

    if (props.showSaved) {
      if (!props.saved.length) {
        return (
          <h2>
            Comienza a guardar tus lugares favoritos y accede más rapido a ellos.
          </h2>
        )
      }
      return <>
      {props.saved.map(item => (
        <Card
          handleSave={saveItem}
          key={`${item.id}-${item.contact.phone}`}
          item={item}
        />
      ))}
    </>
    }

    return <>
      {props.collection.map(item => (
        <Card
          handleSave={saveItem}
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
    <div className="feed">
      <div className="feed__buttons">
        <FilterButtons />
      </div>
      {/* <Input /> */}
      <div className="feed__items">
        {renderCollection()}
      </div>
    </div>
  )
}

const mapStateToProps = ({restaurantReducer}) => restaurantReducer

export default connect(mapStateToProps, restauratActions)(Feed)
