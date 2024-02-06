import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Card from '../components/Card';
import { Checkmark  } from 'react-checkmark';
import userServices from '../Services/UserServices';
import Button from '../components/Button';
import toast from 'react-hot-toast';

const TransactionReciept = () => {
    const [search] = useSearchParams();
    let trans_id = search.get("trans_id");
    const [data , setData] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        userServices.getTransactionData({token , trans_id}).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            toast.error("Something is wrong");
            navigate("/")
        })
    } , [])
  return (
    <Card >
        <div className='w-full flex flex-col items-center'>
            
        <Checkmark size='128px'/>
        <p className='text-[20px] font-semibold'>Success 🎉</p>
        <div className='w-full flex justify-between px-4 py-2'>
            <p>Sender's Name </p>
            <p className='font-semibold'>{data?.sender?.name}</p>
        </div>
        <div className='w-full flex justify-between px-4 py-2'>
            <p>Sender's Email </p>
            <p className='font-semibold'>{data?.sender?.email}</p>
        </div>
        <div className='w-full flex justify-between px-4 py-2'>
            <p>Reciever's Name </p>
            <p className='font-semibold'>{data?.reciever?.name}</p>
        </div>
        <div className='w-full flex justify-between px-4 py-2'>
            <p>Reciever's Email </p>
            <p className='font-semibold'>{data?.reciever?.email}</p>
        </div>
        <div className='w-full flex justify-between px-4 py-2'>
            <p>Amount </p>
            <p className='font-semibold'>{"₹ " + data?.amount}</p>
        </div>
        
        <Button title={"Dashboard"} onClick={(e) => {
            navigate("/")
        }}/>

        </div>
    </Card>
  )
}

export default TransactionReciept