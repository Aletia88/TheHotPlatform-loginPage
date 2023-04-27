import React, { useState } from 'react';
import Logo from './Logo';


const ForgetPassword= ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <div className="h-screen flex flex-row w-full">
      <Logo />
      <div className='flex  md:h-screen flex-col justify-center align-middle items-center  w-full sm:w-3/5'>
        <h2 className="text-xl font-light mb-10  text-black">Reset Password</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-20 rounded-xl w-5/6 py-4 px-40 "
        >
        
          <div className="mb-16 text-xl ">
            <label
              className="block text-gray-800 font-regular mb-4"
              htmlFor="email"
            >
              Email
            </label>
            <input className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" id="username" type="text" placeholder="Enter your Email" />

          </div>
          <button
         type="Password"
         className="transition duration-300 ease-in-out text-slate-50 cursor-pointer py-2 px-4 rounded-xl font-semibold  hover:bg-yellow-600  w-96 mb-10"
         >
        Reset Password
        </button>
          
        </form>
      </div>
    </div>
  );
}



export default ForgetPassword;
