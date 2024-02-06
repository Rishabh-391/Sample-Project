import React, { useState } from 'react'
import Card from '../components/Card'
import Title from '../components/Title'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomMessage from '../components/BottomMessage'
import userServices from '../Services/UserServices'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const naviagate = useNavigate();
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = async () => {
        toast.promise(userServices.register({
            name: firstName + " " + lastName,
            password,
            email
        }).then((res) => {
            localStorage.setItem("token", res.token);
            naviagate("/");

        }), {
            loading: 'Processing ... ',
            success: <b>Account Created</b>,
            error: "Oops ! something went wrong"
        })
    }
    return (
        <>
            <Card >
                <Title title={"Sign up"} desc={"Enter your information to create an account"} />
                <InputBox label={"First Name"} placeholder={"John"} onChange={(e) => {
                    setFirstName(e.target.value);

                }} />
                <InputBox label={"Last Name"} placeholder={"Doe"} onChange={(e) => {
                    setLastName(e.target.value);
                }} />
                <InputBox label={"Email"} placeholder={"someone@somewhere.com"} onChange={(e) => {
                    setEmail(e.target.value);
                }} />
                <InputBox label={"Password"} type="password" placeholder={"123456"} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <Button title={"Register"} onClick={(e) => {
                    handleSignup();
                }} />
                <BottomMessage />
            </Card>
        </>
    )
}

export default Signup