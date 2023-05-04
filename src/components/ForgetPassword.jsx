import React, { useState } from 'react';
import Logo from './Logo';
import Box from '@mui/material/Box';



function ForgetPassword(){
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
  };


  return (
    <Box className="flex w-screen flex-wrap items-center sm:no-wrap justify-center " sx={{ width: '100%' }} >
      <Logo />
      <div className='flex  md:h-screen flex-col justify-center align-middle items-center  w-full sm:w-3/5'>
        <h2 className="text-xl  mb-10  text-black font-bold mt-6">Reset Password</h2>
        <form
          onSubmit={handleSubmit}
          className="px-8 pt-6 pb-8 mb-0 w-96 flex flex-col justify-center items-center"
        >
        
          <div className="mb-16 text-xl font-Poppins ">
            <label
              className="block text-gray-800 font-regular mb-4"
              htmlFor="email"
            >
              Email
            </label>
            <input className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" id="username" type="text" placeholder="Enter your Email" />

          </div>
          <button
          onChange={(e) => setEmail(e.target.value)}
         type="email"
         value={email}
         id="email"
         className="transition duration-300 ease-in-out text-slate-50 cursor-pointer py-2 px-4 rounded-xl font-semibold  hover:bg-yellow-600  w-96 mb-10"
         >
        Reset Password
        </button>
          
        </form>
      </div>
    </Box>
  );
}



export default ForgetPassword;
