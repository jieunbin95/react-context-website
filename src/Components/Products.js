import React from 'react'

const Products = ({
  name,imagePath,updateItemCount
}) => {

  const handleChange = (event) => {
    const currentValue=event.target.value
    updateItemCount(name,currentValue)
  }

  return (
    <div styled={{textAlign:'center'}}>
      <img
       style={{width:'80%'}}
       src={`http://localhost:4000/${imagePath}`}
      />

      <form style={{marginTop:'10px'}}>
        <label>{name}</label>
        <input
        style={{marginLeft:7}}
        type='number'
        min='0'
        defaultValue={0}
        onChange={handleChange}
        />
      </form>  
    </div>
  )
}

export default Products
