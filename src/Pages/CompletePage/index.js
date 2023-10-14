import React, { useContext, useEffect, useState } from 'react'
import {OrderContext} from '../../Context/OrderContext'
import axios from 'axios'


const CompletePage = ({setStep}) => {
  const [orderHistory,setOrderHistory]=useState([])
  const [loading,setLoading]=useState(true)
  const [orderData]=useContext(OrderContext)

  const orderCompleted=async(orderData)=>{
    try{
      const response=await axios.post('http://localhost:4000/order',orderData)
      console.log('데이터전달',response)
      setOrderHistory(response.data)
      setLoading(false)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    orderCompleted(orderData)
  },[orderData])

  const orderTable=orderHistory.map(item=>(
    <tr>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ))

  if(loading){
    return (<div>...loading</div>)
  } else{
    return (
    <div style={{textAlign:'center'}}>
      <h2>주문이 성공했습니다.</h2>
      <h3>지금까지 모든 주문</h3>
      <table style={{margin:'auto'}}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Price</th>
          </tr>
         {orderTable}
        </thead>
      </table>
      <button onClick={()=>setStep(0)}>돌아가기</button>
    </div>
  )
  }

  
}

export default CompletePage