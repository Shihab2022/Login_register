import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const allUser=JSON.parse(localStorage.getItem('userInfo') || '[]')
   
    const handleRegister = (e) => {
        const name=e.target.username.value
        const email=e.target.email.value
        const password=e.target.password.value
        const userInfo = { name: name, pass: password ,email:email };
        localStorage.setItem('userInfo',JSON.stringify(allUser))
        allUser.push(userInfo)
        console.log(name,)
    //   e.preventdefault();
    console.log('ok')
      e.preventDefault();
      // localStorage.setItem("userInfo", userInfo);
    };
   

   console.log(allUser)
    return (
        <>
      <div class="background py-10 h-[520px]">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleRegister} className='h-[600px]'>
        <h3 className=''>Register Here</h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Enter your  name"
          id="username"
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
        />

        <button>Register</button>
        <div className="flex justify-between items-center mt-3">
            <p>Already have an account  ? </p>
          <Link to='/login' className="text-zinc-900 underline">Login</Link>  </div>
      </form>
    </>
    );
};

export default Register;