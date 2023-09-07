import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <>
    
      <nav  className="navbar navbar-expand-md bg-dark navbar-dark ">

        <Link className="navbar-brand" to="/">
          <img src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Loading" height="80px"/>{""}
        My Website</Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>

        </ul>
        <Link to="/login" className="btn btn-info mx-1"> Login</Link>
        <Link to="/signup" className="btn btn-info mx-1"> Signup</Link>
        
      </nav>
   
    </>
  );
}
export default Navbar