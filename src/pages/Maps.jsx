import React from 'react'

import Map from '../components/Map'
import Feed from '../components/Feed'

const Maps = () => {
  return (
    <div className="wrapper">
      <div className="map">
        <Feed />
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_GOOGLEMAPS_KEY}`}
          containerElement={<div className="map__area-map" />}
          mapElement={<div className="map__area-map" />}
          loadingElement={<p>Cargando</p>}
        />
      </div>
    </div>
  )
}

export default Maps
