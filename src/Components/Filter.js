import React ,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from './Rating'

const Filter = () => {

  const {productState,productDispatch} = CartState()
  
  const setRate = (i)=>{
    productDispatch({type:'FILTER_BY_RATING',payload:i})
  }
  console.log(productState)
  return (
    <div className='filters'>
      <h4>Filter Products</h4>
      <div className='filters-items'>
        <span>
          <Form.Check 
          inline
          type='radio'
          label='Ascending'
          name='group1'
          id={`inline-1`}
          onChange={()=>productDispatch({type:"SORT_BY_PRICE",payload:'lowtohigh'})}
          checked={ productState.sort ==='lowtohigh' ? true:false }
          />
        </span>
        <span>
          <Form.Check 
          inline
          type='radio'
          label='Descending'
          name='group1'
          id={`inline-2`}
          onChange={()=>productDispatch({type:'SORT_BY_PRICE',payload:'hightolow'})}
          checked= {productState.sort ==="hightolow" ? true:false}
          />
        </span>
        <span>
          <Form.Check 
          inline
          type='checkbox'
          label='Include out of stock'
          name='group1'
          id={`inline-3`}
          onChange={()=>productDispatch({type:'FILTER_BY_STOCK'})}
          checked={productState.byStock}
          />
        </span>
        <span>
          <Form.Check 
          inline
          type='checkbox'
          label='Fast delivery Only'
          name='group1'
          id={`inline-4`}
          onChange={()=>productDispatch({type:'FILTER_BY_Delivery'})}
          checked={productState.byFastDelivery}
          />
        </span>
        <span>
          <label>Rating</label>
          <Rating rating={productState.byRating} onclick={setRate} style={{cursor:'pointer'}} />
        </span>
        <Button onClick={()=>productDispatch({type:'CLEAR_FILTER'})}>Clear Filters</Button>
        </div>
    </div>
  )
}

export default Filter