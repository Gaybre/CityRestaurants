import React, { useState } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'

const Map = (props) => {
  const [isActive, setIsActive] = useState(undefined)

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 19.437755, lng: -99.129552 }}
    >
      <>
        {props.dataMarkers.map(place => (
          <Marker
            key={place.position.lat}
            position={{
              lat: place.position.lat,
              lng: place.position.lng
            }}
            onClick={() => {
              setIsActive(place)
            }}
          />
        ))}
        {isActive && (
          <InfoWindow
            position={{
              lat: isActive.position.lat,
              lng: isActive.position.lng
            }}
            onCloseClick={() => setIsActive(undefined)}
          >
          <div className="windowMap">
            <h3>{isActive.name}</h3>
            <hr />
            <p>lat: {isActive.position.lat}</p>
            <p>lng: {isActive.position.lng}</p>
          </div>
          </InfoWindow>
        )}
      </>
    </GoogleMap>
  )
}

export default withScriptjs(
  withGoogleMap(Map)
)
