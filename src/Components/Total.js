import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { CartState } from '../context/Context'

const Total = () => {
    const {state} = CartState()
    const [total, setTotal] = useState(0);

    useEffect(()=>{
       setTotal(state.cart.reduce((acc,curr)=>acc+ Number(curr.price)* curr.qtn,0))
    },[state.cart])

  return (
    <div>
        <h1>Summary</h1>
        <div>
            <h4> Total Items : {state.cart.length}</h4>
            <h4> Total Amount : ${total}</h4>
        </div>
        <Button>Proceed To Checkout</Button>
    </div>
  )
}

export default Total