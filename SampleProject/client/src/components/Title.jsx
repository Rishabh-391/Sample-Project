import React from 'react'

const Title = ({title,desc}) => {
  return (
    // <div className='text-[#1e1e1e]  font-Cabin font-medium text-[30px] py-4 flex justify-center'>
    //     {title}
    //     <div>{desc}</div>
    // </div>
    <div className='w-full py-4 flex flex-col items-center justify-center'>
        <div className='font-medium font-Cabin text-[30px]'>
            {title}            
        </div>
        <div className='font-Cabin text-gray-400'>
            {desc}
        </div>

    </div>
  )
}

export default Title