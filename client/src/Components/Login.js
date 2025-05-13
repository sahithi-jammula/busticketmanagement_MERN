import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { loginService } from '../Service/LoginService';

import { signupService } from "../Service/SignupService";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = async () => {
    if (user && password) {
      // Make an API call to validate the user's credentials on your backend.
      await loginService({ mail: user, password: password })
        .then((res) => {
          console.log(res);
          if (res.code === 1) {
            // Successful login
            const userData = res.data; // Replace with your user data from the response
            auth.login(userData);
            navigate("/");
          } else {
            alert("Invalid username or password");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Login failed. Please try again.");
        });
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignup = async () => {
    if (user && password && password === confirmPassword && email && phoneNumber) {
      // Simulate creating a new user (replace with an actual API call).
      const newUser = {
        username: user,
        mail: email,
        password:password,
        phone: phoneNumber,
        gender: gender,
      };

      try{
        await signupService(newUser)
        .then((res)=>{
          console.log
          (res);
          alert(res.message);
        })
        .catch((err)=>{
          alert("Something went wrong ...")
        })
      }
      catch(err)
      {
        alert("Something went wrong ...")
      }

      // Call the signup function from your authentication context.
      // Replace this with your actual signup logic.
      // After successful signup, navigate to the home page.
      // auth.signup(newUser);
      // navigate("/");
    } else {
      alert("Please check the input and make sure it meets the required criteria.");
    }
  };

  const handleToggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url(https://th.bing.com/th/id/OIP.XCttwASgdfIy2ZFc_jSdyQHaFj?pid=ImgDet&rs=1)",
    backgroundSize: "cover",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
  };

  const formContainerStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <label>User Name: </label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />

        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        {isSignup && (
          <>
            <label>Confirm Password: </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />

            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label>Phone Number: </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />

            <label>Gender: </label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br />
          </>
        )}

        <button onClick={isSignup ? handleSignup : handleLogin}>
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <button onClick={handleToggleSignup}>
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}
