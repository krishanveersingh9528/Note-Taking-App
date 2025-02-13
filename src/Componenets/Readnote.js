import React from "react";
import { useLocation } from "react-router-dom";

const Readnote = () => {
  const location = useLocation();
  const note = location.state.note;

  // Define styles
  const containerStyle = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e3f2fd", // Light blue background
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: note.isPinned ? "#fff8dc" : "#d4edda", // Yellow for pinned, light pista for others
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    maxWidth: "800px",
    width: "90%",
    textAlign: "left",
  };

  const titleStyle = {
    color: "#333",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const contentStyle = {
    color: "#444",
    fontSize: "18px",
    lineHeight: "1.8",
  };

  const dateStyle = {
    fontSize: "14px",
    color: "#666",
    marginTop: "15px",
    fontStyle: "italic",
  };
  const readStyle={
    color:"#3B82F6"
  }

  return (
    <div style={containerStyle}>
      <h1 style={readStyle} >Read Your Note..</h1>
      <div style={cardStyle}>
        {note.isPinned && (
          <span style={{ color: "#d32f2f", fontWeight: "bold", fontSize: "18px" }}>
            📌 Pinned Note
          </span>
        )}
        <h1 style={titleStyle}>{note.title}</h1>
        <p style={contentStyle}>{note.content}</p>
        <p style={dateStyle}>Created on: {new Date(note.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Readnote;
