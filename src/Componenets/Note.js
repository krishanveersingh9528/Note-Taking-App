import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { VscPinned } from "react-icons/vsc";
import { TbPinnedFilled } from "react-icons/tb";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { toast } from 'react-toastify';

const Note = ({ note, onDelete, onUpdate }) => {
  const [isPinned, setPinned] = useState(note.isPinned);
  const noteid = note._id;
  const navigate = useNavigate();
  const userid = localStorage.getItem('userid');

  async function deleteHandler() {
    try {
      const res = await axios.post("http://localhost:8080/api/deletenote", { noteid, userid });
      toast.success(res.data.message);
       //  console.log(res.data.message);
  // window.location.reload()

      onDelete(noteid);
      //  console.log(res.data.message);
  // window.location.reload()
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function editHandler() {
    navigate('/editnote', { state: { note } }); //in navigate we can passthe note as state and can acces using useLocation
  
    
  }

  async function pinHandler() {
    const newPinnedStatus = !isPinned;
    try {
      const res = await axios.post("http://localhost:8080/api/ispinned", { isPinned: newPinnedStatus, noteid });
      toast.success(res.data.message);
      setPinned(newPinnedStatus);
      onUpdate(noteid, newPinnedStatus);
       // navigate('/Home'); onupdate chla de ya naviagte('/Home')  dono kam krenge on update krke is good way
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function readHandler() {
    navigate('/readnote', { state: { note } });  //in navigate we can passthe note as state and can acces using useLocation
  }

  return (
    <section style={styles.kv}>
      <div style={styles.noteBox}>
        {/* Pinned Icon */}
        {isPinned ? (
          <TbPinnedFilled onClick={pinHandler} style={styles.pinIcon} />
        ) : (
          <VscPinned onClick={pinHandler} style={styles.pinIcon} />
        )}

        {/* Note Content */}
        <h2 style={styles.title}>{note.title}</h2>
        <p style={styles.content}>{note.content.slice(0, 100) + "..."}</p>
        <h4 style={styles.date}>{new Date(note.createdAt).toLocaleString()}</h4>

        {/* Action Icons */}
        <div style={styles.iconContainer}>
          <BsEye onClick={readHandler} style={styles.actionIcon} title="View Note" />
          <AiOutlineEdit onClick={editHandler} style={styles.actionIcon} title="Edit Note" />
          <AiOutlineDelete onClick={deleteHandler} style={styles.deleteIcon} title="Delete Note" />
        </div>
      </div>
    </section>
  );
}

// Styles
const styles = {
  
  noteBox: {
    width: '400px',
    padding: '15px',
    backgroundColor: '#F0FFF0',
    color: '#333',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(51, 78, 23, 0.4)',
    marginBottom: '20px',
    border: '1px solidrgb(205, 253, 198)',
    textAlign: 'center',
     marginTop:"8px"
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#444',
  },
  content: {
    fontSize: '16px',
    marginBottom: '12px',
    lineHeight: '1.5',
    color: '#555',
  },
  date: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#777',
  },
  pinIcon: {
    paddingLeft: "92%",
    color: "#ff6347",
    fontSize: "20px",
    cursor: "pointer",
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  actionIcon: {
    fontSize: '22px',
    cursor: 'pointer',
    color: '#555',
    transition: 'color 0.3s',
  },
  deleteIcon: {
    fontSize: '22px',
    cursor: 'pointer',
    color: '#ff4d4d',
    transition: 'color 0.3s',
  },
};

export default Note;
