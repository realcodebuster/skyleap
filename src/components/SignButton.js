import React, { useState, useEffect } from 'react'
import {auth, provider} from '../service/firebase';
import {signInWithPopup} from "firebase/auth";
import Home from '../pages/Home';
import { redirect } from "react-router-dom";

const SignButton = (props) => {
    const [valueEmail, setValueEmail] = useState('')
    const [valueName, setValueName] = useState('')
    const handleSignIn = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValueEmail(data.user.email)
            setValueName(data.user.displayName)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('name', data.user.displayName)
        })

        return <redirect to={<Home />} />
    }

    useEffect(() => {
        setValueEmail(localStorage.getItem('email'))
        setValueName(localStorage.getItem('name'))
    })

  return (

    <>
    <button type="button" onClick={handleSignIn} className="text-white bg-gradient-to-b from-orange-300 to-orange-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-center ml-5 mr-5 pt-4 pb-4">
  {props.children}
    </button>
</>

  )
}

export default SignButton