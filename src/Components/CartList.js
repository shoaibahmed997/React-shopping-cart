import React from 'react'
import { ListGroup } from 'react-bootstrap'
import {CartState} from '../context/Context'
import ListProduct from './ListProduct'


const CartList = () => {
    const {state,dispatch} = CartState()
    if (state.cart.length > 0 ){
        return (
        <ListGroup>
            {state.cart.map((product,i)=>{
                return (
                    <ListGroup.Item key={i} style={{margin:'10px 20px' }} >
                        <ListProduct product={product} />
                    </ListGroup.Item>
                    )

            })}
        </ListGroup>
  )
}else{
    return <h1>Cart is Empty!!</h1>
}
}

export default CartList