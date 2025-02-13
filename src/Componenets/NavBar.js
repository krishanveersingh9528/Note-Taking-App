import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  //console.log(user)

  function logouthandle() {
    toast.success("Logout successfully");
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    navigate("/login");
  }

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>
         <img src="https://i.pinimg.com/736x/8e/7c/49/8e7c49b80035e9767c85b96809bc4475.jpg" alt="" style={styles.imgl}  />
        <Link to="/Home" style={styles.link}>NOTE APP</Link>
      </h1>

      {user && <h2 style={styles.user}> <img src="https://cdn-icons-png.flaticon.com/256/1177/1177568.png" alt="" style={styles.imgu} /> Hi, {user}</h2>}

      <div style={styles.buttons}>
        {!user ? (
          <>
            <Link to="/login" style={styles.button}>Login</Link>
            <Link to="/signup" style={styles.button}>Signup</Link>
          </>
        ) : (
          <button style={styles.buttonl} onClick={logouthandle}>Logout</button>
        )}
      </div>
    </nav>
  );
};

// Simple CSS styling
const styles = {
  
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    position:"sticky"
  },
  imgl:{
    width:"19px",
    height:"20px",
    backgroundSize: "cover",
  },
  imgu:{
    width:"17px",
    height:"16px",
    backgroundSize: "cover",
  },
  logo: {
    fontSize: "26px",
    fontWeight: "bold",
    
  },
  link: {
    textDecoration: "none",
   color:"#6A0DAD",
  },
  user: {
    flexGrow: 1, // Pushes logout button to the right
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "bold",
     
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    textDecoration: "none",
    backgroundColor: "#3B82F6", //brightblue
    color: "white",
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  buttonl:{
    textDecoration: "none",
    backgroundColor: "#DC2626",   //brightred
    color: "white",
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  }
 
};

export default NavBar;
