import React from 'react'

const InputBox = ({label , type="text" , placeholder , ...props} , ref) => {
  return (
    <div className='w-full flex flex-col px-3 py-1 '>
        <p className='font-semibold text-gray-600  font-Cabin'>{label}</p>
        <input ref={ref}  type={type} name="" id="" className='outline-none border-gray-400 border-2 px-2 rounded-md h-[40px] active:outline-gray-700 focus:border-gray-700 duration-200 transition-all' placeholder={placeholder} {...props} />

    </div>
  )
}

export default React.forwardRef(InputBox);