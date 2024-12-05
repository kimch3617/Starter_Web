import React from 'react'
import './Square.css'

export const Square = ({value, onClick}) => {
  return (
    <button className='square' onClick={onClick}>
        {value}
    </button>
  )
}

