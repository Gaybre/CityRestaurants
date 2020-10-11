import React from 'react'

import Search from '../assets/icons/search.png'

const Input = ({placeholder}) => {
  return(
    <div className="input">
      <img
        src={Search}
        alt="search"
      />
      <input
        type="text"
        placeholder={placeholder || 'Buscar'} />
    </div>
  )
}

export default Input