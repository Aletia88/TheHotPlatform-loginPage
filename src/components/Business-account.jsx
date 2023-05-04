import * as React from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstPage from './Busniess-account/firstPage'
import Security from './Busniess-account/Security'
import BusinessInfo from './Busniess-account/BusinessInfo'
import BusinessInfo2 from './Busniess-account/BusinessInfo2'
import Logo from './Logo';

const steps = ['Personal Info', 'Business Info', 'Business Info ', 'Security'];

export default function BusinessAccount() {
    const [activeStep, setActiveStep] = React.useState(-1);
    
    const handleNext = () => {
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
     
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

   
    React.useEffect(() => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, [])

   

    const handleReset = () => {
        setActiveStep(0);
    };

    const displayStep = (step) => {
        switch (step) {
            case 0:
                return <FirstPage />
            case 1:
                return <BusinessInfo />
            case 2:
                return <BusinessInfo2 />
            case 3:
                return <Security />
        }
    }

      const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Hobbies: ${hobbies}, Occupation: ${occupation}, Gender: ${gender}, City: ${city}`);
  };

    return (
        <Box
        className=  "flex w-screen flex-wrap items-center sm:no-wrap justify-center" 
        sx={{ width: '100%' }}>
            <Logo />
            <div className='flex  md:h-screen flex-col justify-center align-middle items-center  w-full sm:w-3/5'>

            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    
                        return (
                            <Step 
                            className=' '
                            key={index} 
                            {...stepProps}>
                                <StepLabel className="flex flex-col  py-4 " {...labelProps}>{label}</StepLabel>
                            </Step>
                        )
                    })}
            </Stepper>
            <div   className= "w-full flex items-center justify-center" > 

           {displayStep(activeStep) }
            </div>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography className='font-bold' sx={{ mt: 2, mb: 1 }}>
                    Successfully Registered
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {/* <Button onClick={handleReset}>Reset</Button> */}
                    </Box>
                </React.Fragment>
            ) : (
           
  
                        <Button  
                        onClick={handleNext}
                        className="transition duration-300 ease-in-out text-slate-50 cursor-pointer py-2 px-4 rounded-xl font-semibold  hover:bg-yellow-600 bg-yellow-600 w-96 mb-10">
                            {activeStep === steps.length -1 ? 'Create Account' : 'Continue'}
                        </Button>
                   
               
            )}
            </div>
        </Box>
    );
}