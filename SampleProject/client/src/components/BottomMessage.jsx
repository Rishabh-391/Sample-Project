import React from 'react'
import { Link } from 'react-router-dom'

const BottomMessage = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        Already have an account?  <Link to={"/login"} className=' underline'> Sign in</Link>
    </div>
  )
}

export default BottomMessage