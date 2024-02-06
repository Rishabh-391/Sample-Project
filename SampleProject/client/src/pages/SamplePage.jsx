import React from 'react'

const SamplePage = () => {
    const token = localStorage.getItem("token");
    return (
        <div>
            Your Login Status : {token ? "You are logged in" : "Oops you are not logged in"}
            Hello world
        </div>
    )
}

export default SamplePage
