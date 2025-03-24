import "./styles.css";
import { useState } from "react";
import axiosBaseUrl from "../../Axios/axiosConfig";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosBaseUrl.post("/login", {
        email,
        password,
      });
      console.log(response);
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      navigate("/home");

    } catch (error){
      console.log("The Error", error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login 2</h2>
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
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="signup-description">Don't have an account?</p>
        <p className="signup-link">
          <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
