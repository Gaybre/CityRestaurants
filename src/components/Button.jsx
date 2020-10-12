import React from 'react'

const Button = ({title, typeStyle, size, border, onClick}) => {
  return(
    <button
      className={`btn__${typeStyle}` }
      style={{ padding: `${size}`, borderRadius: `${border}` }}
      onClick={onClick}
    >
      {title || 'Envíar'}
    </button>
  )
}

export default Button
