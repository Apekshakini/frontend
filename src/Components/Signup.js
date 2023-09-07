import React from 'react'
import "./Signup.css";
const Login = () => {
  return (
    
  
    <div className="d-flex justify-content-center align-items-center  mt-3  vh-100 "id="image">
    <div className="border border-3 border-dark p-3 bg-white">
        <form>
            <h2 className="text-center text-primary">Signup</h2>
            <div className="mb-3">
                <label htmlFor='Email'>phone Number:</label>
                <input type="phone number" placeholder="Enter phone number " className="form-control"/>
            </div>
            <div className="mb-3" >
                <label >First Name</label>
                <input type="first name" placeholder="Enter first name" className="form-control"/>
            </div>
            <div className="mb-3" >
                <label >Last Name</label>
                <input type="last name" placeholder="Enter last name" className="form-control"/>
            </div>
            <div className="d-grid">
                <button className="btn btn-success">Signup</button>

            </div>
        </form>
    </div>
   </div>

  )
}

export default Login