import React from 'react'
import Input from './input'

function Body() {
    return (
        <div className='bg-blue-100 flex p-10 flex-col justify-evenly h-screen'>
            <div className="bg-white rounded-lg shadow max-h-['400px'] max-w-['700px'] overflow-x-scroll">
                <Input />
            </div>
        </div>
    )
}

export default Body