import React from 'react'

const Button = ({title , ...props} , ref) => {
  return (
    <div className='w-full cursor-pointer  flex justify-center items-center'>
        <div ref={ref} className='w-[94%] my-2 hover:bg-gray-900 duration-300 transition-all text-white font-medium p-2 rounded-md bg-gray-800 flex justify-center items-center' {...props}>
            {title}
        </div>
    </div>
  )
}

export default React.forwardRef(Button);