import "./styles.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import handleLogout from "../../FunctionHandlers/navbarHandlerLogout";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">My Website</h1>
        <Link to="/home">
          <button className="home-btn">Home</button>
        </Link>
      </div>
      <div className="navbar-right">
        <button
          className="logout-btn"
          onClick={(e) => handleLogout(e, navigate)}
        >
          Logout
        </button>
        <div className="add-snippet-btn-wrapper">
          <Link to="/add_Snippet">
            <button className="add-snippet-btn">Add Snippet</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
