import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Rating = ({onclick,rating,style}) => {
  return (<>
        {[...Array(5)].map((_,i)=> (
            <span onClick={()=>onclick(i+1)} style={style} >
                {rating > i ? <AiFillStar fontSize='15px' /> :<AiOutlineStar /> }
            </span>
        )) }
  </>)
}

export default Rating