import React from 'react'

const Button = ({title, typeStyle}) => {
  return(
    <button className={`btn__${typeStyle}`}>
      {title}
    </button>
  )
}

export default Button
