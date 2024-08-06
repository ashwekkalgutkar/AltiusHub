import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (password.length < 7) {
      newErrors.password = "Password must be atleast 7 characters";
    }
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      try {
        const user = await loginUser({ email, password });
        if(user){
            alert("Login successful");
            navigate("/");
        }
        
      } catch (error) {
        setError({ submit: "login failed" });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <p>{error.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={email}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <p>{error.password}</p>}
      </div>
      {error.submit && <p>{error.submit}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
