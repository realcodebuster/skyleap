import React from 'react'
import SignButton from '../components/SignButton'
import WelcomeImage from '../Assets/Images/welcome.png'
import GoogleLogo from '../Assets/Images/google.png'

const Welcome = () => {
  return (
    <div className="bg-gradient-to-b from-white via-orange-300 w-full h-full fixed to-white">
        <div className='mt-5'>
            <h2 className='ml-4 text-4xl font-bold pb-4 font-Courgette'>Best Social App To <br/> Make New Friends</h2>
            <p className='ml-4 text-gray-600 text-1xl font-Philosopher'>Find People With The Same <br /> Interests As You</p>
        </div>

        <div className='flex justify-center fixed ml-auto mr-auto mt-0 w-fit'>
            <img src={WelcomeImage} className="justify-center" alt="" />
        </div>

        <div className='flex justify-center fixed inset-x-0 bottom-0 mb-10'>
            <SignButton><img src={GoogleLogo} alt='Welcome' className='w-7 pr-2'/> Sign in with Google</SignButton>
        </div>
    </div>
  )
}

export default Welcome