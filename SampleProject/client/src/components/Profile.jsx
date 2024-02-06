import React, { useEffect, useState } from 'react'
import userServices from '../Services/UserServices';
import toast from 'react-hot-toast';

const Profile = () => {
    const [user , setUser] = useState({});

    useEffect(() => {
        getMeDataOfUser();
    } ,[])

    const getMeDataOfUser = async () => {
        const token = localStorage.getItem("token");
        console.log("Token " + token);
        const user = await userServices.checkUser({token});
        if(user){
            setUser(user.data.user);

        }
        
    }

  return (
    <div className='mt-4 px-4 text-[25px]'>
        <p>Account Holder Name : {user.name}</p>
        <p>Balance : {"Rs " + user.amount}</p>
        <p className='text-sm cursor-pointer' onClick={(e)=>{
            navigator.clipboard.writeText(user._id);
            toast.success("Copied to Clipboard")
        }}>Your Account Id {user._id}</p>
    </div>
  )
}

export default Profile