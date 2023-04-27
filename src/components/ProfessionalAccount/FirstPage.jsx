import React from 'react'

export default function FirstPage() {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Email: ${email}, Name: ${name}, Number: ${number}}`);
    };
  

  return (

    <div>
         <form  onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-0 w-96 flex flex-col justify-center items-center">
    <div className="mb-4">
      <label className="block text-black text-base font-normal mb-2 font-Poppins" >
        Name
      </label>
      <input 
      className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" 
      id="username" 
      type="text" 
      value={name}
      placeholder="Enter your Full Name" 
      onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-black text-base font-Poppins mb-2" >
        Email
      </label>
      <input 
      className="transition duration-300 ease-in-out text shadow appearance-none border rounded w-96 py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden  hover:shadow-golden hover:placeholder-transparent" 
      id="username" 
      type="email" 
      placeholder="Enter your Email" 
      value={email}
      onChange= {(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="mb-1">
      <label className="block text-black text-base font-Poppins mb-2" >
        Phone Number
      </label>
      <input 
      className="transition duration-300 ease-in-out shadow appearance-none border rounded w-96 py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline placeholder hover:border-golden hover:shadow-golden hover:placeholder-transparent mb-8z" id="password" 
      type="tel" 
      placeholder="Enter your Phone Number" 
      value={number}
      onChange={(e) => setNumber(e.target.value)} 
      />
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    

  </form>
    </div>
  )
}
