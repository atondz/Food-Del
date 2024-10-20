import React, { useState } from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt=""  />
         
        </div>
        <div className='login-popup-inputs'>
        {currState==="Login"?<></>:<input type="text" placeholder='your username' required/>}
           
           <input type="email" placeholder='your email' required/>
           <input type="password" placeholder='your password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className='login-popup-condition'>
        <input type="checkbox" />
        <p>I agree with luật  </p>
        </div>
        {currState==="Sign Up"?<p>Already have an account?  <span onClick={()=>setCurrState("Login")}>Login here</span></p>:<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>}
        
        
      </form> 
    </div>
  )
}

export default LoginPopup
