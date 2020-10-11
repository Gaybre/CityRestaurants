import React from 'react'

import Map from '../components/Map'
import Items from '../components/Items'

import { API_KEY } from '../components/credentials'


const Maps = () => {
  return (
    <div className="wrapper">
      <div className="row map">
        <section className="map__items">
          <Items />
        </section>
        <section>
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`}
            containerElement={<div className="map__section" />}
            mapElement={<div className="map__section" />}
            loadingElement={<p>Cargando</p>}
          />
        </section>
      </div>
    </div>
  )
}

export default Maps

// https://dribbble.com/shots/14163502-Parabellum

// https://dribbble.com/shots/14351181-Map
// https://dribbble.com/shots/14336291-DAILY-UI-029-MAP
// https://dribbble.com/shots/14256711-Map-Reader
// https://dribbble.com/shots/14320704-Doctor-Search
// https://dribbble.com/shots/14165347--AGYA-finder-boarding-house


// https://proy-restaurant-010719.firebaseapp.com/
// https://github.com/emonroy58/prueba-Intelimetrica
// https://console.cloud.google.com/apis/library?filter=category:maps