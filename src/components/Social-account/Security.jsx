import React, {useState} from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import '../../App.css'

export default function Security() {

  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }

  return (
    <div>
       <form className="px-8 pt-6 pb-8 mb-0 w-96 flex flex-col justify-center items-center">
    <div className="mb-4">
      <label className="block text-black text-base font-normal mb-2 font-Poppins" >
      when did you start?
      </label>
      <input className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" id="username" type="date" placeholder="Dates" />
    </div>
    <div className="mb-4 pl-4">
      <label className="block text-black text-base font-Poppins mb-2" >
        Password
      </label>
      {/* <input className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" id="username" type="password" placeholder="Enter your Password" /> */}
      <div className='flex overflow-hidden items-center justify-center '>
          <input type={type} className="transition duration-300 ease-in-out shadow appearance-none border rounded w-96 py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden hover:shadow-golden hover:placeholder-transparent mb-8z "/>
          <span 
          onClick={handleToggle}
          className='relative right-10 cursor-pointer'
          ><Icon icon={icon} size={20}/></span>
        </div>
    </div>
    <div className="mb-1">
      <label className="block text-black text-base font-Poppins mb-2" >
        Confirm Password
      </label>
      <input className="transition duration-300 ease-in-out shadow appearance-none border rounded w-96 py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden hover:shadow-golden hover:placeholder-transparent mb-8z" id="password" type="password" placeholder="" />
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}

{/* <div className='flex overflow-hidden items-center'>
          <input type={type} className="transition duration-300 ease-in-out shadow appearance-none border rounded w-96 py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden hover:shadow-golden hover:placeholder-transparent mb-8z"/>
          <span 
          onClick={handleToggle}
          className='relative right-10 cursor-pointer'
          ><Icon icon={icon} size={20}/></span>
        </div> */}
    </div>
    

  </form>
    </div>
  )
}
