import React from 'react'
import { Card,Button,ListGroup } from 'react-bootstrap'
import Rating from './Rating'
import {CartState} from '../context/Context'

const SingleProduct = ({product}) => {
  const {state,dispatch} = CartState()
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item>Price:${product.price}</ListGroup.Item>
    <ListGroup.Item>Stock:{product.inStock}</ListGroup.Item>
    <ListGroup.Item>Fast Delivery:{product.fastDelivery ? <span>Yes</span> : <span>No</span> }</ListGroup.Item>
    <ListGroup.Item>Rating:<Rating rating={product.rating}  ></Rating></ListGroup.Item>
  </ListGroup>

  {state.cart.some(p=>p.id === product.id) ? 
    <Button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:product})}  variant="danger">Remove from cart</Button>
    :
    <Button onClick={()=>dispatch({type:'ADD_TO_CART',payload:product})} disabled={!product.inStock} variant="primary">Add to Cart</Button>

   }



  </Card.Body>
</Card>
  )
}

export default SingleProduct