import { useState } from 'react'
// import './App.css/'
import StepController from './components/StepController'
import Logo from './components/Logo'
import Accounts from './components/Accounts'
import Stepper from './components/Stepper'

function App() {
  return(
    <div className = "flex w-screen flex-wrap items-center sm:no-wrap">
      
      <Logo />
    
      <StepController />
      
    
      
    </div>
  )
}

export default App
