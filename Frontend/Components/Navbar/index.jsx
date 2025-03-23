import "./styles.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import handleLogout from "../../FunctionHandlers/navbarHandlerLogout";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1 className="navbar-title">My Website</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <div className="navbar-right">
        <button onClick={(e) => handleLogout(e, navigate)}>Logout</button>
        <Link to="/add_Snippet">
          <button className="add-snippet-btn">Add Snippet</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
