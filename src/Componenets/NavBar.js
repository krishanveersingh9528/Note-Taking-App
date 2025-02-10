import React from "react";
import { Link,useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate=useNavigate();
  const user=localStorage.getItem('user')
  // console.log(user)

   function logouthandle(){
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    navigate('/login');
   }
  return (
    <section>
    <nav style={styles.navbar}>
      <h1 style={styles.logo}><Link to='/Home' >Note App</Link></h1>
      <div style={styles.links}>

        {!user? <>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/signup" style={styles.link}>Signup</Link>
          </>: 
          <button style={styles.button} onClick={logouthandle}>Logout</button>
          
        }
        
       
      </div>
     
      {user && <h1>Hi, {user}</h1>}
      
    </nav>

    {user && (
  <Link to="/addNote" style={{ backgroundColor: "green", padding: "1px", color: "white", textDecoration: "none" }}>
    Add Note
  </Link>
)}

      {/* {user && <button style={{backgroundColor:"green"}}><Link to='/shownote'>Add Note</Link></button>} */}

    </section>
    
  );
};

// Styling for the Navbar
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#222", // Light black background
    color: "yellow",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "yellow",
    
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "yellow",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  },
  button:{
    color:"Red",
  }
};

export default NavBar;
