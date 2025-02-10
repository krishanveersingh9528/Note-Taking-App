import React, { useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   async function submitHandler(e){
         e.preventDefault()
         try{
          const res=await axios.post("http://localhost:8080/api/signup", { username, email,password });
        
          console.log(res.data.message);
          navigate('/login');
          setEmail("")
          setPassword("")
          setUsername("");
         }
         catch(error){
            console.log("Error adding user:", error)
         }
    }
  return (
    <div>
      
        <form onSubmit={submitHandler}>
          
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' id='username' onChange={(e)=>{setUsername(e.target.value)}}  value={username}/>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" name='email'id='email'  onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
               <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
              <br />
             <button>Submit</button>
             <h5>If already have an account,<Link to="/login" >Login</Link></h5>

        </form>
    </div>
  )
}

export default Signup