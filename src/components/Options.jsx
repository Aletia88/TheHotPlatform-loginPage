import React from 'react'

export default function Options(props) {
  return (
    <div className='flex md:pr-16 md:pl-8 cursor-pointer hover:rounded-md p-2 gap-x-4 option pb-10'>
        <img src={`${props.img}.png`} className='w-11 h-11' alt="" />
        <div className='account'>
            <p className='text-base title pb-2 font-medium'>{`${props.title}`}</p>
            <p className='text-sm desc'>{`${props.p}`}</p>
        </div>
    </div>
  )
}
