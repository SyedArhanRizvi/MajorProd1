import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();
    // console.log(email, password);
    const loginHandler = async (e)=>{
        e.preventDefault();
        // console.log(email, password);
        
        try {
          const loggedInUser = await axios.post("http://localhost:5000/api/userLoggedIn", {email, password}, {
          withCredentials : true
      });
         if(loggedInUser.statusText === "Created") {
          navigator("/adminPage");
          console.log("User Logged in Successful");
         }
        } catch (error) {
          console.log("Due to some errors we can't logged in you plz fix the bug first ", error);
        }
    }
    
    
  return (
    <section className='login'>
      <div> <form onSubmit={loginHandler}>
            <input type="text" placeholder='Enter Your email here..' name='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter Your password here..' name='password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" className='btn' value={"Submit"}/>
            <p>Want to became an Admin ? <Link to={"/registration"}>Create a new Account ?</Link></p>
        </form></div>
    </section>
  )
}

export default Login
