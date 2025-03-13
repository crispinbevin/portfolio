import React from 'react'

function Button({ text }) {
  return (
    <button className='bg-white text-black font-bold rounded-2xl px-6 py-3 hover:transform hover:translate-y-[-1px] hover:translate-x-[1px]  hover:shadow-lg hover:shadow-accent hover:cursor-pointer transition-all duration-300'>{text}</button>
  )
}

export default Button