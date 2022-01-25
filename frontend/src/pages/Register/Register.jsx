import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './Register.css'
import logo from "./logo.png"
import man from "./man.png"
//const [name,setName] = useState('')

const Register = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [error, setError] = useState("");
      const navigate = useNavigate();
    
      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log("hllo");
          const url = "http://localhost:5000/api/users";
          const { data: res } = await axios.post(url, data);
          navigate("/Dashboard");
          
          console.log(res.message);
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        }
      };

    return (
        <div className="regmain">
            <div className = "logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className ="rgdashborder"></div>
        
          <div className = "rgperson">
              <div className ="rgstroke">
              <img src={man} alt ="man"/>
              </div>
          </div>
              <span className ="rgmaintext">
              <h4>Welcome to</h4>
              <h4>your Dashboard</h4>
              </span>
          <div className ="rgsubtext">
                <h4> Your uploaded APIs will be displayed</h4>
                <h4>here once you login to your account</h4>
          </div>
        
          <div className = "rgloginborder"></div>
          
          <div className = "lmain">
            <h4>Create your account</h4>
          </div>

          <input 
            type="name" 
            placeholder="Name" 
            id="name"
            name="name"
            onChange={handleChange}
            value={data.name} 
            />

            <input 
            type="email" 
            placeholder="Email address" 
            id="email"
            name="email"
            onChange={handleChange}
            value={data.email} 
            />

            <input 
            type="password" 
            placeholder="Password" 
            id="pass"
            name="password"
            onChange={handleChange}
            value={data.password}
            />
            {error && <div className="Error_msg">{error}</div>}
            <button className ="rgbut" onClick = {handleSubmit} >Register</button>

            <div className = "acc">
                <h5>Already have an account?</h5>
            </div>
           
           <form method="get" action="../../Dashboard">
              <button className="rglog" type="submit">Login</button>
           </form>
        </div>
    )
}
export default Register;