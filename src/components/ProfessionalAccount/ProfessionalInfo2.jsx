import React from 'react'

export default function ProfessionalInfo2() {
  return (
    <div>
    <form className="px-8 pt-6 pb-8 mb-0 w-96 flex flex-col justify-center items-center">
    <div className="mb-4">
      <label className="block text-black text-base font-normal mb-2 font-Poppins" >
        Education
      </label>
      <input className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" id="username" type="text" />
    </div>
    <div className="mb-4">
      <label className="block text-black text-base font-Poppins mb-2" >
        Skills
      </label>
      <input className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" id="username" type="text" />
    </div>
    <div className="mb-1">
      <label className="block text-black text-base font-Poppins mb-2" >
       Country & City
      </label>
      <input className="transition duration-300 ease-in-out shadow appearance-none border rounded w-96 py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden hover:shadow-golden hover:placeholder-transparent mb-8" id="password" type="address" placeholder="Location" />
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="mb-1">
      <label className="block text-black text-base font-Poppins mb-2" >
       Gender
      </label>
      <select required className="transition duration-300 ease-in-out shadow appearance-none border rounded w-96 py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden hover:shadow-golden hover:placeholder-transparent mb-8">
    <option  >Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div>
   
    </div>
    

  </form>
</div>
  )
}
