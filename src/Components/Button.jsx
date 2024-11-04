import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <a href="#"><button className='rounded-lg py-2 px-3 bg-purple-400 hover:bg-purple-500'>{title}</button></a>
    </div>
  )
}

export default Button
