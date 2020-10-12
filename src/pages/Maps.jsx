import React from 'react'
import { connect } from 'react-redux'
import * as restaurantActions from '../actions/restauratActions'

import Map from '../components/Map'
import Feed from '../components/Feed'
import Loader from '../components/Loader'

const Maps = (props) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
  const locations = []
  const getLocations = () => {
    if (!props.collection.length) {
      return null
    }
    props.collection.forEach(element => {
      let location = {
        position: element.address.location,
        name: element.name
      }
      locations.push(location)
    })
  }

  return (
    <div className="wrapper">
      <div className="map">
        <div className="map__feed">
          <Feed />
        </div>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`}
          containerElement={<div className="map__area-map" />}
          mapElement={<div className="map__area-map" />}
          dataMarkers= {locations}
          loadingElement={<Loader />}
        />
        {getLocations()}
      </div>
    </div>
  )
}

const mapStateToProps = ({restaurantReducer}) => restaurantReducer

export default connect(mapStateToProps, restaurantActions)(Maps)
