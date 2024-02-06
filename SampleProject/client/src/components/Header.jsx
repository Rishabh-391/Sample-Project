import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-[70px] border flex justify-between px-4 items-center text-[30px]'>
        <div>
            PayTm
        </div>
        <div className='w-[200px] p-4'>
            <Button title={"Logout"} onClick={(e) => {
              console.log("logout clicked ");
                localStorage.setItem("token" , "");
                navigate("/login");
            }}/>
        </div>
    </div>
  )
}

export default Header