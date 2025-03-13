import React from 'react'

function HoverLink({text}) {
    return (
        <button className='  font-bold rounded-2xl px-6 py-3 hover:transform hover:translate-y-[-1px] hover:translate-x-[1px] hover:shadow-md hover:shadow-white hover:cursor-pointer transition-all duration-300'>{text}</button>
      )
}

export default HoverLink