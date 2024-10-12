import React, { useState } from 'react'
import "./Registration.css"
import { Link } from "react-router-dom"
import axios from "axios"

function Registration() {
    const [fName, setFName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const registrationHandler = async (e)=>{
        e.preventDefault();
       console.log(fName, username, password, email, phone); 
       try {
        // http://localhost:3000/
        const userData = await axios.post("http://localhost:5000/api/registerUserAccount", {fName, username, password, email, phone});
        console.log(userData);
       } catch (error) {
        console.log("Sorry we cant register you plz fix this bug first ", error);``
        
       }
        
    }

  return (
    <section className='registration'>
        <div> <form onSubmit={registrationHandler}>
            <input type="text" placeholder='Enter Your first name here..' name='fName' onChange={(e)=>setFName(e.target.value)}/>
            <input type="text" placeholder='Enter Your  userName here..' name='username' onChange={(e)=>setUserName(e.target.value)}/>
            <input type="text" placeholder='Enter Your email here..' name='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="number" placeholder='Enter Your phone here..' name='phone' onChange={(e)=>setPhone(e.target.value)}/>
            <input type="password" placeholder='Enter Your password name here..' name='password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" className='btn' value={"Submit"}/>
            <p>Already have an <Link to="/login">account</Link></p>
        </form>
       
        </div>
    </section>
  )
}

export default Registration
