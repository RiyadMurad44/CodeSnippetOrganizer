import "./styles.css";
import { useState } from "react";
import axiosBaseUrl from "../../Axios/axiosConfig";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      console.log("Full Name:", name, "Email:", email, "Password:", password);

      const response = await axiosBaseUrl.post("/signup", {
        name,
        email,
        password,
        
      });

      const token = response.data.data.token;
      localStorage.setItem("token", token);

      console.log("responsing: ", response);
      navigate('/home');

    } catch (error) {
      console.log("Error Error: ", error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p className="login-description">Already have an account?</p>
        <p className="login-link">
          <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
