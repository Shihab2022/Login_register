import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [message,setMessage]=useState('')
  const allUser=JSON.parse(localStorage.getItem('userInfo'))
  const handleLogin = (e) => {
    const name=e.target.username.value
    const pass=e.target.password.value
    const userName=allUser.filter(u=>u.name===name)
    if(userName.length!==0){
        if(userName[0].pass === pass){
            e.target.reset();
            setMessage('User Login Successfully ')
        }
        else{
            setMessage('Sorry Your Password is wrong!!! ')
        }
    }
    else{
        setMessage('Sorry Your user name is wrong!!! ')
    }
    e.preventDefault();
  };

  return (
    <>
      <div class="background h-[520px]">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleLogin}>
        <h3>Login Here</h3>
{
    message && <p className="text-center text-red-500 font-semibold mt-1">{message}</p>
}
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Enter your user name"
          id="username"
          required
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          required
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
