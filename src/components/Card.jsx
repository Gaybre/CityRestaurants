import React from 'react'

import ImgDemo from '../assets/demo.jpg'
import Button from './Button'

const Card = ({name, contact, address, rating}) => {
  return(
    <div className="card">
      <div className="card__header">
        <img src={ImgDemo} alt="restaurante-demo" />
        <div>
          <h4>Barajas, Bahena and Kano</h4>
          <p>sitiowe.com</p>
          <p>💛💛💛💛💛</p>
        </div>
      </div>
      <div className="card__details">
        <p>82247 Mariano Entrada</p>
        <p>
          email@mail.com
          <br />
          telefono
        </p>
      </div>
      <div className="card__social">
        <Button
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