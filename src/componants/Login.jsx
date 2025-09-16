import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import API from "../api/api";
export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formdata, setFormData] = useState({
    name :"",
    email :"",
    password :"",
    cnfpassword:""
  });

  const handleChange = (e) =>{
    setFormData ({...formdata,[e.target.name]:e.target.value}) 
  }

  useEffect(()=>{
    axios.post()
  }
  ,[])

  const handleSignup = async (e) => {
  e.preventDefault();

  if (formdata.password !== formdata.cnfpassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const res = await API.post("/register", formdata);
    console.log("User registered:", res.data);
    alert("Signup successful!");
  } catch (err) {
    console.error(err);
    alert("Error signing up");
  }
};


  return (
    <div className="MAIN">
      <div className="SUBMAIN">
        <img src="./phone.png" alt="Logo" />
      </div>

      <div className="SUBMAIN2">
        {isLogin ? (
          // Login Form
          <form>
            <h2>Login</h2>
            <input type="text" placeholder="Enter Your E-Mail"  />
            <br />
            <input type="password" placeholder="Enter your password" />
            <br />
            <button type="submit">Login</button>
            <p>
              Don't have an account?{" "}
              <span
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </p>
          </form>
        ) : (
          // Signup Form
          <form onSubmit={handleSignup}>
  <h2>Sign Up</h2>
  <input type="text" placeholder="Enter Your Name" name="name" value={formdata.name} onChange={handleChange}/>
  <br />
  <input type="text" placeholder="Enter Your E-Mail" name="email" value={formdata.email} onChange={handleChange}/>
  <br />
  <input type="password" placeholder="Enter your password" name="password" value={formdata.password} onChange={handleChange} />
  <br />
  <input type="password" placeholder="Confirm password" name="cnfpassword" value={formdata.cnfpassword} onChange={handleChange} />
  <br />
  <button type="submit">Sign Up</button>
</form>

        )}
      </div>
    </div>
  );
};
