import React from 'react'
import { CartState } from '../context/Context'
import Filter from './Filter'
import SingleProduct from './SingleProduct'

function Homepage() {
    const {state,productState} =CartState()

    const transformProducts = ()=>{
        let TransProducts = state.products;

        if (productState.sort){
            TransProducts = TransProducts.sort((a,b)=>{
            return productState.sort ==='lowtohigh' ? a.price-b.price : b.price-a.price
        })}

        if (!productState.byStock){
            TransProducts = TransProducts.filter((prod)=>{return prod.inStock > 0})
        }

        if(productState.byFastDelivery){
            TransProducts = TransProducts.filter(prod=> prod.fastDelivery)
        }

        TransProducts = TransProducts.filter(prod=> prod.rating >= productState.byRating )

        return TransProducts
    }
  return (
        <div className='homepage'>
            <Filter />
                <div className='products-listing'>
                    {transformProducts().map((prod)=>{
                        return <SingleProduct product={prod} key={prod.id} />
                    })}
                </div>
        </div>
  )
}

export default Homepage