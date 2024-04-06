import React from 'react'

function MenuItem({item}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${item.image})`}}> </div>
        <h1>{item.name}</h1>
        <p>${item.price}</p>
    </div>
  )
}

export default MenuItem