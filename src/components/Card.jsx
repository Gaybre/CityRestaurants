import React from 'react'

import ImgDemo from '../assets/demo.jpg'
import Button from './Button'
import Icon from './Icon'
import RatingStars from './RatingStars'

const Card = ({item, handleSave}) => {
  const {
    id,
    name,
    contact: {site, email, phone},
    address: {street, city, state, location},
    rating
  } = item

  return(
    <div className="card">
      <div className="card__header">
        <img src={ImgDemo} alt="restaurante-demo" />
        <div>
          <h4>
            {name || 'Restaurant'}
          </h4>
          <Icon type="web" />
          <a href={site || '#'}>
            {site || 'restaurant.com.mx'}
          </a>
          <br />
          <RatingStars id={id} rating={rating} />
        </div>
      </div>
      <div className="card__details">
        <p><Icon type="address" />{street}</p>
        <p>{`${city}, ${state}`}</p>
        <p>
          <Icon type="email" />
          {email || 'restaurant@mail.com'}
          <br />
          <Icon type="phone" />
          {phone || 'no disponible'}
        </p>
      </div>
      <div className="card__social">
        <Button
          onClick={() => handleSave(item)}
          title='Guardar'
          typeStyle='normal'
        />
        <div>
          <Button
            title='Like'
            typeStyle='facebook'
          />
          <Button
            title='Compartir'
            typeStyle='facebook'
          />
        </div>
      </div>
    </div>
  )
}

export default Card