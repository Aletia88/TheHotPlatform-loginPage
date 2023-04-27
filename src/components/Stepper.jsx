import React, {useState, useEffect, useRef} from "react";
import '../App.css'



const Stepper = ({steps, currentStep}) => {

const [newStep, setNewStep] = useState([]);
const stepRef = useRef()

const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    
    console.log(stepNumber)
    let i = 0
    for(let i=0; i < 5; i++){
        console.log(i)
    }

   do{
        // current step
        
        if(i === stepNumber){
            newSteps[i] = {
                ...newSteps[i],
                highlighted:true,
                selected:true,
                completed:true,
            };
           
            // console.log(i)
        }
        //step completed
        else if(i < stepNumber){
            newSteps[i] = {
                ...newSteps[i],
                highlighted:false,
                selected:true,
                completed:true,
            };
           
        }
       

        else{
            newSteps[i] = {
                ...newSteps[i],
                highlighted:false,
                selected:false,
                completed:false,
            };

        }
       i++
        console.log(i)
        
        return newSteps;
    }while(i < 4)
}
useEffect(() => {
    const stepsState = steps.map((step, index) => 
        Object.assign({}, {
            description: step,
            completed:false,
            highlighted: false,
            selected:false,
            

            
        })
    )
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current)
}, [steps, currentStep]
)

    const displaySteps = newStep.map((step, index) => {
        return(
            (
                <div key= {index} 
                className={index !== newStep.length - 1 ?
                    "w-full flex items-center justify-center" : "flex item-center justify-center align-center" }>
                    

                    <div className="relative justify-center flex flex-col items-center text-teal-600">
                        <div className={`rounded-full border-2 flex items-center transition duration-500 ease-in-out  h-12 w-12 justify-center py-3  ${step.selected ? "bg-golden text-white font-bold border border-golden" : "bg-gray-300 border-gray-300" }`}>
                            {step.completed ? (
                                <span className="text-white font-bold text-xl">&#10003;</span>
                            ) : ''}
                        </div>
                        <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium  font-Poppins ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>{step.description}</div>
                    </div>
                        <div className={`border-t-2 w-14 flex-auto transition duration-500 ease-in-out  px-1   ${step.completed ? 'border-golden' :'border-gray-300  '}`}>
                        
                        </div>
                </div>
            )
        )
    } )

  return (
     <div className="mx-4 p-4 flex  items-center ">
        {displaySteps}
       
    </div>)
}

export default Stepper;