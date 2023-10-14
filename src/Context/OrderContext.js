import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext()

//context
//1. 데이터의 초기값을 저장
//2. 데이터가 업데이트 해줄 함수
//3. 업데이트 될 때마다 가격 역시 변경
export function OrderContextProvider(props){
  const [orderCounts,setOrderCounts]=useState({
    products: new Map(),
    options:new Map()
  })
  //필요한 데이터의 초기값을 입력해준다

  const [totals,setTotals]=useState({
    products:0,
    options:0,
    total:0
  })
  //처음 초기값을 입력해준다.

  const pricePerItem={
    products:1000,
    options:500
  }

  const totalPrice=(orderType,orderCounts)=>{
    let optionCount=0
    for(const count of orderCounts[orderType].values()){
      optionCount+=count
    }

    return optionCount*pricePerItem[orderType]
  }

  useEffect(()=>{
    const productsTotal=totalPrice('products',orderCounts)
    const optionsTotal=totalPrice('options',orderCounts)
    const total=productsTotal+optionsTotal

    setTotals({
      products:productsTotal,
      options:optionsTotal,
      total
    })
  },[orderCounts])

  const value=useMemo(()=>{
    function updateItemCount(itemName,newItemCount,orderType){

      
      const oldOrderMap=orderCounts[orderType]
       //products인지 options인지 구분해주기 
      const newOrderMap=new Map(oldOrderMap)
      newOrderMap.set(itemName,parseInt(newItemCount))
        // string으로 들어올 경우 숫자로 전환해 줄 수 있는 parseInt를 넣어준다

      const newOrderCounts={...orderCounts}
      newOrderCounts[orderType]=newOrderMap
       //기존에 가지고 있던 데이터값에 새로 업데이트한 데이터 값을 넣어준다 

      setOrderCounts(newOrderCounts)

    }
    return [{...orderCounts,totals},updateItemCount]
  },[orderCounts,totals])

  return <OrderContext.Provider value={value} {...props}/>
    
}