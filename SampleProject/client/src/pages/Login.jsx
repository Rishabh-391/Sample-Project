import React, { useState } from 'react'
import Card from '../components/Card'
import Title from '../components/Title'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomMessage from '../components/BottomMessage'
import userServices from '../Services/UserServices'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [firstName , setFirstName] = useState("");
    const naviagate = useNavigate();
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const handleSignup = async () => {
        toast.promise(userServices.login({
            password,
            email
        }).then(async(res) => {
            console.log(res);
            localStorage.setItem("token" , res.data.token);
            naviagate("/");

        }) , {
            loading : 'Processing ... ',
            success : <b>Logged in Successfully</b>,
            error : "Oops ! something went wrong"
        })
    }
  return (
    <>
        <Card >
            <Title title={"Log in"} desc={"Enter your credentials to login"}/>
            
            <InputBox label={"Email"} placeholder={"someone@somewhere.com"} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <InputBox label={"Password"} type="password" placeholder={"123456"} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <Button title={"Signin"} onClick={(e) => {
                handleSignup();
            }}/>
            <BottomMessage />
        </Card>
    </>
  )
}

export default Login