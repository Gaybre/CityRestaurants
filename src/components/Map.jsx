import React from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps'

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 18.899481, lng: -98.972997 }}
    />
  )
}

export default withScriptjs(
  withGoogleMap(Map)
)
