import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { VscPinned } from "react-icons/vsc";
import { TbPinnedFilled } from "react-icons/tb";

const Note = ({ note }) => {
  const [isPinned,setpinned]=useState(note.isPinned);
  const noteid=note._id;
  const navigate= useNavigate()
 
  const userid=localStorage.getItem('userid');
 async function deleteHandler(){
  const noteid=note._id;
  try{
  const res=await axios.post("http://localhost:8080/api/deletenote", { noteid,userid });
  //  console.log(res.data.message);
  // window.location.reload()
  navigate(0);
  
  
  }catch(error){
    console.log("Error in delete a note",error);
  }

 

  }
   
 async function editHandler (){
      navigate('/editnote',{state:{note}})  //in navigate we can passthe note as state and can acces using useLocation
  }
 
 async function pinhandler(){
  const newPinnedStatus = !isPinned;
  setpinned(newPinnedStatus); 
  
  await axios.post("http://localhost:8080/api/ispinned", { isPinned: newPinnedStatus, noteid }); 
  navigate(0)
  }

  return (
    <section style={styles.noteContainer}>
      
      <div style={styles.noteBox}>
      {isPinned ? <TbPinnedFilled onClick={pinhandler}  style={{paddingLeft:"96%",color:"white"}} /> : <VscPinned onClick={pinhandler}  style={{paddingLeft:"96%",color:"white"}} />}
      <h2 style={styles.title}>{note.title} </h2>
        <p style={styles.content}>{note.content}</p>
        <h4 style={styles.date}>{new Date(note.createdAt).toLocaleString()}</h4>
          <div>
         <button onClick={deleteHandler} style={{backgroundColor:'red'}}>Delete</button>
         <br />
         <button onClick={editHandler} style={{backgroundColor:'skyblue'}}>Edit Note</button>

         </div>
      </div>
    </section>
  );
};

// Styles
const styles = {
  noteContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  },
  noteBox: {
    width: '400px',
    padding: '15px',
    backgroundColor: '#333',
    color: 'yellow',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  content: {
    fontSize: '16px',
    marginBottom: '12px',
    lineHeight: '1.5',
  },
  date: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#bbb',
  },
};

export default Note;
