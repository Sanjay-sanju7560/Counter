import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/countSlice'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counterReducer.count)
  const [amount,setAmount] = useState("")
 const  handleIncrement = ()=> {
    if(amount===""){
      alert("please provide the ammount properly !!!")
    }
    else{
      dispatch
    }
  }
  return (
    <div className='border border-radius p-5 w-25 mt-5 text-center ' style={{borderColor:'white',width:'1000px'}}>
      <h1 style={{fontSize:"100px"}}>
        {count}
      </h1>
      <div className=' d-flex justify-content-evenly aligh-items-center mt-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrease</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-primary' >Increase</button>
    </div>
    <div className=' d-flex justify-content-evenly aligh-items-center mt-5 ms-5' style={{borderColor:'white',width:'280px'}}>
           <input type="text" className='form-control' placeholder='Input Counter  Increment Amount' onChange={e=>setAmount(e.target.value)} value={amount} />
            <button  className='btn btn-primary ms-5' >Increment By Amount </button>
    </div>
    </div>
  )
}

export default Counter