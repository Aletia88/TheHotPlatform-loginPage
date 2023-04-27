import React,{useState} from 'react'
import Component from './Accounts'
import Accounts from './Accounts'
import {Link} from "react-router-dom"



export default function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResults, setShowResults] = React.useState(false)
  const [openModal, setOpenModal] = useState(false);

  const onClick = () => setShowResults(true)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

 
  return(
    <>
    
      
   
        <p className='welcome'>welcome back!</p>
        <p className='mb-12'>Sign in with your full details</p>
        <form 
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-0 w-96 flex flex-col justify-center items-center"
        >
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" >
        Email
      </label>
      <input 
      className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder-black hover:border-golden  hover:shadow-golden hover:placeholder-transparent" 
      id="email" 
      type="email" 
      placeholder="enter your username or email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-1">
      <label className="block text-black text-sm font-bold mb-2" >
        Password
      </label>
      <input 
      className="transition duration-300 ease-in-out shadow appearance-none border rounded w-96 py-2 px-3 text-black mb-0 leading-tight focus:outline-none focus:shadow-outline placeholder-black hover:border-golden hover:shadow-golden hover:placeholder-transparent" 
      id="password" 
      type="password" 
      placeholder="enter your password" 
      value={password}
      onChange={(e) => setEmail(e.target.value)}
      />
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <Link to="./ForgetPassword"> 
    <p className='transition duration-300 ease-in-out text forget text-xs leading-none text-golden mt-0 mb-10 text-end font-normal w-96 hover:font-bold cursor-pointer'>forgot password?</p>
    </Link>
    <button className="transition duration-300 ease-in-out text-slate-50 cursor-pointer py-2 px-4 rounded-xl font-semibold  hover:bg-yellow-600  w-96 mb-10">Sign in</button>
  </form>
        <p className='text-sm'>Don’t have an account?</p>  <span className="text-golden cursor-pointer underline  text-center w-96 " href="" onClick={() => setOpenModal(true)}> Get Started </span> 
        <Accounts 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
  
  </>
    )
}