import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddNote = () => {
  const navigate = useNavigate();

  const userid = localStorage.getItem("userid");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/addnote", {title,content,userid})
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/Home");
      }
    } catch (error) {
      console.log("Error adding note");
      toast.error(error.response.data.message);
    }
  }

  // Inline styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#daf5dc",
  };

  const formStyle = {
    backgroundColor: "#fffff0",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    maxWidth: "600px",
    width: "90%",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const textareaStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    marginTop: "10px",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={submitHandler}>
        <h2>Add a New Note</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title"  value={title} onChange={(e) => setTitle(e.target.value)}placeholder="Enter note title" style={inputStyle}/>
        <br />
        <label htmlFor="content">Content:</label>
        <textarea name="content" id="content" rows={6}  value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your note here..." style={textareaStyle}> </textarea>
        <br />
        <button style={buttonStyle}>Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
