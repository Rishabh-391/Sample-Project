import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import userServices from '../Services/UserServices';
import Header from '../components/Header';
import Profile from '../components/Profile';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import useDebounce from '../hooks/useDebounce';

const Dashboard = () => {
    const navigate = useNavigate();
    const [allUsers , setAllUsers] = useState([]);
    const [filter , setFilter] = useState("");
    useEffect(() => {
        checkLoginStatus();
    },[]);

    const checkLoginStatus = async () => {
        const token = localStorage.getItem("token");
        if(token === undefined || token === ""){
            toast.error("You are not logged in");
            navigate("/signup");
        }else{
            try {
                const res = await userServices.checkUser({token});

            } catch (error) {
                toast.error("You are not logged in");
                localStorage.setItem("token" , "");
                navigate("/signup");
            }
            
        }
    }
    const debounceValue = useDebounce(filter , 200);

    useEffect(() => {
      
      const token = localStorage.getItem("token");
      userServices.getAllUsers({token , filter : debounceValue}).then((res)=>{
        setAllUsers(res.data);
        console.log(localStorage.getItem("token"));

      })

    } , [debounceValue]);
  return (
    <>
      <Header />
      <Profile />
      <div className=' w-full'>
      <InputBox label={"Transfer Money"} onChange={(e)=>{
        setFilter(e.target.value);
      }} placeholder={"Enter account id/account name/email"}/>


      <div className='flex flex-wrap'>
      {
        allUsers.map((ele , index) => (
          <div key={ele.email} className='border-2 border-gray-600 w-[300px] rounded-md  duration-500 transition-all m-4 p-4 hover: shadow-2xl hover:shadow-slate-700'>
            <p className='text-[20px]'>
              {"" +  ele.name}
            </p>
            <p>
              {" " + ele.email}
            </p>
            <p className='text-[10px]'>
              {" " + ele._id}
            </p>
            <Button title={"Send Money"} onClick={(e)=>{
              navigate(`/transfer?account_id=${ele._id}`)
            }}/>
          </div>
        ))
      }
      </div>
      
      </div>
    </>
  )
}

export default Dashboard