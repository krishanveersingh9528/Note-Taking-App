import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const AddNote = () => {
   const navigate= useNavigate()

    const userid=localStorage.getItem('userid')
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
   async function submitHandler(e){
        e.preventDefault();
        try{
            const res=await axios.post("http://localhost:8080/api/addnote", { title,content ,userid});
            // console.log(res.data.message)
            navigate("/Home")
        }
        catch(e){
            console.log("error adding note")
        }
    }
  return (
    <div>
         <form action="" onSubmit={submitHandler}>
            <label htmlFor="title">Title:</label>
            <input type="text" name='title' id='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <br />
            <label htmlFor="content">Content:</label>
           <textarea name="content" id="content" rows={5} value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
            <br/>
           <button>Add Note</button>
         </form>
    </div>
  )
}

export default AddNote