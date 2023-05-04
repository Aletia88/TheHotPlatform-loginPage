import React, {useState, useEffect} from 'react'
import cover from '../assets/images/cover.png'
import logo from '../assets/images/logo.png'
import '../App.css'

export default function Logo() {
  return (
    <div className='cont flex w-screen md:w-2/5 md:h-screen h-96 items-end'>
        
        <img src={cover} className='h-96 w-screen basis-1/2 bg-auto '  />
        <img className='absolute flex md:w-2/5 md:-translate-y-1/2  mb-16 sm:mb-0' src={logo} alt="" />
       
    </div>
  )
}
