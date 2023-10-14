import React, { useContext, useState } from 'react'
import { OrderContext } from '../../Context/OrderContext';

const SummaryPage = ({setStep}) => {
  const [check,setCheck]=useState(false);
  const [orderDetail]=useContext(OrderContext)
  const productArray=Array.from(orderDetail.products)
  //객체를 배열로 바꾸어준다(Array.from)
  const productList=productArray.map(([key,value])=>(
    <li>
      {value} {key}
    </li>
  ))
  
  const hasOptions=orderDetail.options.size>0
  let optionsDisplay=null

  if(hasOptions){
    const optionsArray=Array.from(orderDetail.options.keys())
    const optionList=optionsArray.map(key=>(
      <li>{key}</li>
    ))

    optionsDisplay=(
      <>
        <h2>옵션:{orderDetail.totals.options}</h2>
        <ul>{optionList}</ul>
      </>
    )
  } 

  const handleSubmit=(event)=>{
    event.preventDefault()
    setStep(2)
  }
  
  return (
    <div>
      <h1>주문확인</h1>
      <h2>여행 상품:{orderDetail.totals.products}</h2>
      <ul>
        {productList}
      </ul>
      {optionsDisplay}
      <form onSubmit={handleSubmit}>
        <input
        type="checkbox"
        checked={check}
        id='confirm-checkbox'
        onClick={(e)=>setCheck(e.target.checked)}
      />{' '}
      <label htmlFor='confirm-checkbox'>
        주문하려는 것을 확인하셨나요?
      </label>

      <br/>
      <button disabled={!check}>
        주문확인
      </button>
      </form>
    </div>
  )
}

export default SummaryPage