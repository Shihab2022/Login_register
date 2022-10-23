import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    
  const allUser=JSON.parse(localStorage.getItem('userInfo'))
console.log(allUser)
  const handleLogin = (e) => {
    const name=e.target.username.value
    const pass=e.target.password.value
    const userName=allUser.filter(u=>u.name===name)
    if(userName.length!==0){
        if(userName[0].pass === pass){
            console.log('success')
        }
        else{
            console.log('wrong password')
        }
    }
    else{
        console.log('wrong user')
    }
    console.log(name,pass)
    e.preventDefault();
    // localStorage.setItem("userInfo", userInfo);
  };

  return (
    <>
      <div class="background h-[520px]">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleLogin}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Enter your user name"
          id="username"
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
        />

        <button>Log In</button>
        <div className="flex justify-between items-center mt-5">
            <p>You have no account  please ? </p>
          <Link to='/register' className="text-zinc-900 underline">Register</Link>  </div>
      </form>
    </>
  );
};

export default Login;
