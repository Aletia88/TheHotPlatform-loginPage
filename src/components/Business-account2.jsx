import React,{useState, useEffect} from 'react'
import { StepperContext } from './Busniess-account/context/StepperContext'
import FirstPage from './Busniess-account/firstPage'
import Security from './Busniess-account/Security'
import BusinessInfo from './Busniess-account/BusinessInfo'
import BusinessInfo2 from './Busniess-account/BusinessInfo2'
import Stepper from './Stepper'
import ContinueButton from './Busniess-account/ContinueButton'
import Logo from './Logo'

export default function BusinessAccount() {

    const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Personal Info",
    "Business Info",
    "Business Info",
    "Security"
  ]
  
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FirstPage />
      case 2:
        return <BusinessInfo />
      case 3:
        return <BusinessInfo2 />
      case 4:
        return <Security />
    }
  }
const handleClick = (direction)=>{
  let newStep =  currentStep ;
  direction === "next" ? newStep++ : " ";
  newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  console.log(direction)
  console.log(newStep)
  console.log(currentStep)
}
  //check if steps are within bounds

  return (
    <div className = "flex w-screen flex-wrap items-center sm:no-wrap justify-center">
        <Logo />
        <div className='flex  md:h-screen flex-col justify-center align-middle items-center  w-full sm:w-3/5'>
          <Stepper
      steps={steps}
      currentStep={currentStep}
    />
<div className=''>
  <StepperContext.Provider value={{
    userData,
    setUserData,
    finalData,
    setFinalData
  }}>
    {displayStep(currentStep)}
  </StepperContext.Provider>
</div>

        {/* <FirstPage /> */}
    <ContinueButton 
    handleClick={handleClick}
    currentStep={currentStep}
    steps={steps}
    />
</div>
    </div>
  )
}
