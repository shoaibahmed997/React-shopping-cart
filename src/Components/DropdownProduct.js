import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { CartState } from '../context/Context'

const DropdownProduct = ({product}) => {
    const {dispatch} = CartState()
  return (
    <div>
        <div>
            <img src={product.image} width='50px' height='50px' style={{borderRadius:'50%',marginRight:"10px"}} />
            <span>{product.name}</span> <AiFillDelete fontSize="20px" onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:product})} color='red'></AiFillDelete>
        </div>
            <span style={{marginLeft:'50px'}} ><b>${product.price} </b></span>
    </div>
  )
}

export default DropdownProduct