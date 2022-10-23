import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);
  const allUser=JSON.parse(localStorage.getItem('userInfo') || '[]')
  const userInfo = { name: name, pass: pass };
  const handleLogin = (e) => {
    e.preventdefault();
    // localStorage.setItem("userInfo", userInfo);
  };
  allUser.push(userInfo)
localStorage.setItem('userInfo',JSON.stringify(allUser))
 console.log(allUser)
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
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your user name"
          id="username"
        />

        <label for="password">Password</label>
        <input
          onChange={(e) => setPass(e.target.value)}
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
