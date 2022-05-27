import React from 'react'
import Rating from './Rating'
import { Form,Table } from 'react-bootstrap'
import {AiFillDelete} from 'react-icons/ai'
import { CartState } from '../context/Context'

const ListProduct = ({product}) => {
    const {dispatch} = CartState()
  return (
    <Table responsive>
        <tbody>
            <tr>
            <td><img src={product.image} width='100px' height='100px' style={{border:'2px solid black'}} /></td>
            <td><span style={{fontSize:'20px'}}>{product.name}</span></td>
            <td><span style={{fontSize:'20px'}}>${product.price}</span></td>
            <td><Rating rating={product.rating}></Rating></td>
            <td>     <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" onChange={(e)=>dispatch({type:"CHANGE_CART_QTN",payload:{id:product.id,qtn:e.target.value}})}>
               { [...Array(product.inStock).keys()].map(i=>{
                   return <option key={i+1} >{i+1}</option>
               }) }
            
       
            </Form.Control>
        </Form.Group></td>
        <td> <AiFillDelete fontSize='30px' onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:product})}} style={{cursor:"pointer"}} /> </td>
            </tr>
            
        </tbody>
</Table>
  )
}

export default ListProduct