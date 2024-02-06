import React from 'react'

const Card = ({children , className}) => {
  return (
    <div className={`w-full h-screen flex justify-center items-center border bg-slate-300 ${className}`}>
        <div className='w-[400px] py-4 bg-white border rounded-md shadow-slate-600 shadow-md'>
            {children}
        </div>
    </div>
  )
}

export default Card