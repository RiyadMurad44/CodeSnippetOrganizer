import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import axiosBaseUrl from "../../Axios/axiosConfig";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Email:", email, "Password:", password);
      const response = await axiosBaseUrl.post("/users/login", {
        email,
        password,
      });
      const token = response.data.user.token;
      localStorage.setItem("token", token);

      console.log(response);

      navigate("/home");

    } catch (error){
      console.log("The Error", error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
