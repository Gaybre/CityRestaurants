import React from 'react'

import Input from './Input'
import Card from './Card'

const Feed = () => {
  return(
    <div className="feed">
      <Input />
      <div className="feed__items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Feed