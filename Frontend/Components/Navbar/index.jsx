import "./styles.css";
import React from "react";
import Link from "react-router-dom";
import handleLogout from "../../FunctionHandlers/navbarHandlerLogout";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">My Website</h1>
      <Link to="/home"><button>Home</button></Link>
      <div className="navbar-right">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <Link to="/add_Snippet">
          <button className="add-snippet-btn">Add Snippet</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
