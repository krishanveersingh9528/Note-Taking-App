import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Note from './Note';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const userid=localStorage.getItem('userid');
  const user=localStorage.getItem('user')
 const navigate=  useNavigate()
  let [notes,setNotes]=useState([]);
  
  useEffect( ()=>{
    const fetchNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/notes/${userid}`);
      //  console.log(res.data);
      setNotes(res.data.notes); 
      // console.log(notes);
      
    } catch (error) {
       console.log(error);
        //  toast.error(error.response.data.message)
     }
  };
  fetchNotes();
      },[notes])

  //deletehandler
  function deletehandler(noteid){
    setNotes(notes.filter((note)=>note._id!==noteid));
  }

  //update handler
  function updatehandler(noteid,pinned){
     setNotes(notes.map((note)=>
      note._id===noteid?{...note,isPinned:pinned}:note
    ))
  }

   //add handler
  function addhandler(){
    navigate("/addnote")
  }

  return (
    <div style={styles.container}>
      
       {user && (
        <button onClick={addhandler} style={styles.addButton}>
        ➕ Add Note
        </button>
      )}
     {user ? (
    notes.length > 0 ? (
        notes.map((note, idx) => <Note key={idx} note={note} onDelete={()=>deletehandler(note._id)} onUpdate={()=>updatehandler(note._id,note.isPinned)} />)
    ) : (
        <p style={styles.noNotesText}>No notes available.</p>
    )
) : (
    <p style={styles.noNotesText}>Login first</p>
   )}
    
        
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    margin: '50px 0',
    flexWrap: 'wrap',
    gap: '30px', 
    width: '100%',
  },
  addButton: {
    position: 'absolute',
    top: '110px',
    right: '25px',
    
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 7px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: '0.3s',
   
    
  },
  addButtonHover: {
    backgroundColor: '#45a049',
  },
  noNotesText: {
    fontSize: '18px',
    color: '#555',
    marginTop: '20px',
  },
};

export default Home