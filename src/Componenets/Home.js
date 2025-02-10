import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Note from './Note';

const Home = () => {
  const userid=localStorage.getItem('userid');
  let [notes,setNotes]=useState([]);
  
  useEffect( ()=>{
    const fetchNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/notes/${userid}`);
      //  console.log(res.data);
      setNotes(res.data.notes); 
      // console.log(notes);
      
    } catch (err) {
       console.log("failed to fetch")
     }
  };
  fetchNotes();
      },[])


  return (
    <div>
      
      {notes.length>0 ?(
           notes.map((note,idx)=>{
  
            return <Note key={idx} note={note} />
         })
      ):(
        <p>No notes available.</p>
      )}
        
    </div>
  )
}

export default Home