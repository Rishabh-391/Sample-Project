import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Card from '../components/Card';
import userServices from '../Services/UserServices';
import { useState } from 'react';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import toast from 'react-hot-toast';

const TransferAmount = () => {
    const navigate = useNavigate();
    const [search] = useSearchParams();
    const [rUser , setRUser] = useState(null);
    const [currentBalance , setCurrentBalance] = useState(0);
    const [transferingBalance, setTransferingBalance] = useState(0);
    useEffect(() => {
      fetchRecieverDetails();
    },[])

    const fetchRecieverDetails = async () => {
      const id = search.get("account_id");
      const token = localStorage.getItem("token");
      userServices.findAUser({token , id}).then((res) => {
        setRUser(res.data);
      })
      userServices.findBalance({token}).then((res) => {
        setCurrentBalance(parseInt(res.data.balance))
      })
    }
    function transferAmount(){
      if(transferingBalance > currentBalance){
        toast.error("Insufficient Amount");
        setTransferingBalance(0);
        return;
      }
      const token = localStorage.getItem("token");
      toast.promise(userServices.transferAmount({
        to : rUser._id,
        amount : transferingBalance,
        token
    }).then((res) => {
        console.log(res);
        navigate(`/receipt?trans_id=${res.data.transaction_id}`);
    }).catch(err => {
      console.log("Got into errors" , err);
    }) , {
        loading : 'Processing ... ',
        success : <b>Tranfered Successfully</b>,
        error : "Oops ! something went wrong"
    })
    }
  return (
    // <div>{search.get("account_id") + "fr"} </div>
    <>
      <Card className="p-2">
        <p className='text-[30px] mx-2 font-Cabin font-semibold'>Send Money</p>
        <p className='text-[10px] mx-2 font-Cabin font-semibold'>Reciever Name : {rUser?.name}</p>
        <p className='text-[10px] mx-2 font-Cabin font-semibold'>Email : {rUser?.email}</p>
        <p className='text-[20px] mx-2 font-Cabin font-semibold'>Your Balance : {currentBalance}</p>
        <InputBox label={"Amount"} placeholder={"Rs 3242 /-"} type={"number"} value={transferingBalance} onChange={(e) => setTransferingBalance(parseInt(e.target.value))}/>
        <Button title={"Transfer Amount"} onClick={(e) => {
          transferAmount();
        }}/>
      </Card>
    </>
  )
}

export default TransferAmount;