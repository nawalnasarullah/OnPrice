import React from 'react'
import GoogleLogIn from "../components/GoogleLogIn";

function LoginPage() {
  return (
     <>
     <div className="flex flex-col items-center justify-center">
      <img src="/images/welcome.svg" alt="Logo" className="w-1/5 mt-24 animate-bounce" />
      <div className='flex items-center justify-center text-center'>
         <img src="/images/text-only.png" alt="Logo" className="h-16 w-56 mb-4" />
      </div>
      <GoogleLogIn />
     </div>
    </>
  )
}

export default LoginPage