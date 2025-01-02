import Card from '@/components/Features/Card'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-900 w-full h-full text-white p-3'>
        <div className='font-mono text-2xl ml-2 text-center font-extrabold'>
            Read according to your Preferences!
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <Card title='Some good ass title that fetches users' image="https://placehold.co/600x400/png"/>
            <Card title='Some good ass title that fetches users' image="https://placehold.co/600x400/png"/>
            <Card title='Some good ass title that fetches users' image="https://placehold.co/600x400/png"/>

        </div>
    </div>
  )
}

export default page