import React from 'react'

const Story = ({ image, title }) => {
  return (
    <div className='w-24 flex flex-col p-3 bg-white rounded-2xl'>
        <img src={image} className='w-16 h-16 rounded-lg  border-4 border-orange-500/100 mr-auto ml-auto' alt="" />
        <p className='text-center text-gray-600 font-Courgette mt-1 font-bold'>{title}</p>
    </div>
  )
}

export default Story