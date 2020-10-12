import React from 'react'

const Icon = ({color, size, type}) => {
  const iconSize = size ? size : '10'

  return <i
    className={type ? `icon-${type}` : 'icon-location'}
    style={{ fontSize: `${iconSize}px`, color: color }}
  >
  </i>
}

export default Icon