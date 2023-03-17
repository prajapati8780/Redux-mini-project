import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add, remove } from '../Reducer/slice'

export default function Redux() {
  const dispatch=useDispatch()
  const cart=useSelector(state=>(state.cart))
  const mult=cart*1000
  const handleadd=()=>{
    dispatch(add(1))
    console.log(1)
  }
  const handleremove=()=>{
    if(cart>=1){
      dispatch(remove(1))
    }
  }
  return (
    <div>
        <div className='icon-wrapper'>
            <img src='https://cdn-icons-png.flaticon.com/512/3523/3523887.png'></img>
            <p className='cart-p'>{cart}</p>
        </div>
        <h1>Home Component</h1>
      <div className='all-wrapper item'>
        <div className='img-wrapper item'>
            <img src="https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png"></img>
        </div>
        <div className='text-wrapper item'>
            <span>
            I-Phone
            </span>
            <span>
            Price: $1000.00
            </span>
            <p>Price:{mult}</p>
        </div>
        <div className='btn-wrapper item'>
            <button onClick={()=>handleadd()} >Add To Cart</button>
            <button onClick={()=>handleremove()}>remove To Cart</button>
        </div>
      </div>
    </div>
  )
}





