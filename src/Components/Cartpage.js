import React from 'react'
import CartList from './CartList'
import Total from './Total'

function Cartpage() {
  return (
    <div className='cartpage'>
      <CartList />
      <Total />
    </div>
  )
}

export default Cartpage