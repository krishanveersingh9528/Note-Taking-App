import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EditNote = () => {
  const navigate=useNavigate();
  const location= useLocation();
  const note=location.state.note;
  const noteid=note._id;
  const [title,setTitle]=useState(note.title)
  const [content,setContent]=useState(note.content)
  
async function submitHandler(e){
    e.preventDefault();
   
    const res=await axios.post("http://localhost:8080/api/editnote", { title,content ,noteid});
//    console.log(res.data.message)
   navigate('/Home')
  }

  return (
    <div>
       <form action="" onSubmit={submitHandler}>
       <label htmlFor="title">Title:</label>
            <input type="text" name='title' id='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <br/>
            <label htmlFor="content">Content:</label>
           <textarea name="content" id="content" rows={5} value={content} onChange={(e)=>{setContent(e.target.value)}} ></textarea>
            <br/>
           <button>Edit</button>
       </form>
    </div>
  )
}

export default EditNote