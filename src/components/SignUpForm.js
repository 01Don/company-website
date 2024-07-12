import { Link } from "react-router-dom"
import React  from 'react'
import "./SignUpForm.css"

function SignUpForm() {
  return (
    <div>
        <form id="form-container">
            <h1>Sign Up </h1>
            <div className="input1">
            <lable>Full Name</lable>
            <input type='text' name='name' placeholder='Eg. Raydon Osengo'/>
            </div>
            <div className="input1">
            <lable>Email</lable>
            <input type='email' name='email' placeholder='Eg.osengoraydon@gmail.com'/>
            </div>
            <div className="input1">
            <lable>Password</lable>
            <input type='password' name='password' placeholder='Enter Strong Password'/>
            </div>
            <div className="input1">
            <lable>Confirm Password</lable>
            <input type='Password' name='password' placeholder=''/>
            </div>
            <button>SignUp</button>
            <Link>Already Have Account</Link>
        </form>
    </div>
  )
}

export default SignUpForm