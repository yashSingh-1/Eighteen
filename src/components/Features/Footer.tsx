import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full border-t p-4 mt-5 font-mono'>
        <div className='grid grid-cols-3 md:grid-cols-4'>
            <div className='text-xl font-bold  col-span-1'>
                The Eighteen Project
            </div>
            <div className='flex justify-end items-end'>
                Instagram
            </div>
            <div className='flex justify-center items-center'>
                Twitter
            </div>
            <div>
                Youtube
            </div>
        </div>
    </div>
  )
}

export default Footer