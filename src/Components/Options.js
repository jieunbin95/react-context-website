import React from 'react'

const Options = ({name,updateItemCount}) => {
  return (
    <form>
      <input
        onChange={(e)=>updateItemCount(name,e.target.checked?1:0)}
        type='checkbox'
        id={`${name}option`}
      />{' '}
      <label htmlFor={`${name}option`}>{name}</label>
    </form>
  )
}

export default Options