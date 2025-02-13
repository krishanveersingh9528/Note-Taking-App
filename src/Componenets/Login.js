import React ,{useState}from 'react'
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
      const navigate=useNavigate()
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
   async function submitHandler(e){
         e.preventDefault()
         try{
          const res=await axios.post("http://localhost:8080/api/login", { username,password });
          if (res.status === 200 ) {
            // Successfully logged in, clear inputs and handle the token (store in localStorage, etc.)
            setUsername('');
            setPassword('');
            
            // console.log('Login successful, token:', res.data.token);
            // You can store the token in localStorage or sessionStorage if needed
            
            localStorage.setItem('authToken', res.data.token);
            localStorage.setItem('user', res.data.user1.username);
            localStorage.setItem('userid',res.data.user1._id);
              // console.log(res.data.user1._id)
               toast.success("Login  succesfull")
              navigate('/Home');
          } 
         }
         catch(error){
            console.log("Error adding user:", error.response.data.error)
            toast.error(error.response.data.message)
         }
    }
  return (
    <div>
      
        <form onSubmit={submitHandler}>
          
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' id='username' onChange={(e)=>{setUsername(e.target.value)}}  value={username}/>
            
           <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
              <br />
             <button>Submit</button>
            <h5>Does not have an account,<Link to="/signup" >Signup</Link></h5>
        </form>
    </div>
  )
}

export default Login