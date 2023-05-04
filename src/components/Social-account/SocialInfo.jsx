import React,{ useContext } from 'react'
export default function BusinessInfo() {

    // const { userData, setUserData } = useContext(StepperContext)

    // const handleChange = (e) => {
    //   const { name, value} = e.target;
    //   setUserData({ ... userData, [name]: value})
    // }


  return (
    <div>
    <form className="px-8 pt-6 pb-8 mb-0 w-96 flex flex-col justify-center items-center">
<div className="mb-4">
 <label className="block text-black text-base font-normal mb-2 font-Poppins" >
   About You
 </label>
 <input
  // onChange={handleChange} 
  // value={userData["Business Name"] || ""}
  name="Business Name"
  className="p-6 transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-4 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" id="username" type="text" placeholder="Enter your Business Name" />
</div>
<div className="mb-4">
 <label className="block text-black text-base font-Poppins mb-2" >
 Achievements?
 </label>

 <textarea  className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent text-area" id="username" type="text-area" placeholder="Tell Us" ></textarea>
</div>
<div className="mb-1">
 <label className="block text-black text-base font-Poppins mb-2" >
 Education?
 </label>

 <textarea className="transition duration-300 ease-in-out shadow appearance-none border rounded w-96 py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden hover:shadow-golden hover:placeholder-transparent mb-8z" id="password" type="password" placeholder="Tell Us" >
  </textarea>
 
 {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
</div>


</form>
</div>
  )
}
