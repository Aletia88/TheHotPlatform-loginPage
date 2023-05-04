import React, {useState, useEffect} from 'react'
import '../App.css'

export default function Logo() {
  return (
    <div className='cont flex w-screen md:w-2/5 md:h-screen h-96 items-end'>
        
        <img src='cover.png' className='h-96 w-screen basis-1/2 bg-auto '  />
        <img className='absolute flex md:w-2/5 md:-translate-y-1/2  mb-16 sm:mb-0' src=" logo.png " alt="" />
       
    </div>
  )
}
