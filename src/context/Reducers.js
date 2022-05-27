export const cartReducer = (state,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,{...action.payload,qtn:1}]}
        case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter(c=>c.id !== action.payload.id) }

        case 'CHANGE_CART_QTN':
            return {...state,cart:state.cart.filter(item=> item.id === action.payload.id ? item.qtn = action.payload.qtn :item.qtn ) }
        default:
            return state
    }
} 

export const productReducer = (state,action)=>{
    switch (action.type){
        case 'SORT_BY_PRICE':
            return {...state,sort:action.payload}
        case 'FILTER_BY_STOCK':
            return {...state,byStock:!state.byStock}
        case 'FILTER_BY_Delivery':
            return {...state,byFastDelivery:!state.byFastDelivery}
        case 'FILTER_BY_RATING':
            return {...state,byRating:action.payload}
        case 'FILTER_BY_QUERY':
            return {...state,searchQuery:action.payload}

        case 'CLEAR_FILTER':
            return { 
                byStock:false,
                byFastDelivery:false,
                byRating:0,
                searchQuery:''
            }
        default:
            return state
    }
}