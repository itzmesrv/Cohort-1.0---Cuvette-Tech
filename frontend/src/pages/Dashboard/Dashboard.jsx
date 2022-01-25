import React from "react";
//import { useState } from "react";
//import { Form, FormGroup, FormControl } from "react-bootstrap";
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Dashboard.css";
import logo from "./logo.png";
import man from "./man.png";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

//import { Link } from "react-router-dom";
//const [name,setName] = useState('')

const Dashboard = () => {
  
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const redirect = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      // window.location = "/";
      navigate("/Marketplace");
      console.log(res.message);
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
    <div className="dashmain">
      <div className="dalogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="dadashborder"></div>
      {/* <div className="daperson"> */}
        <div className="dastroke">
          <img src={man} alt="man" />
          </div>
        
      {/* </div> */}
      <div className="damaintext">
        <h4>Welcome to  </h4>
        <h4>your Dashboard</h4>
      </div>
      <div className="dasubtext">
        <h4>Your uploaded APIs will be </h4>
        <h4>displayed here once you login to</h4>
        <h4>your account</h4>
      </div>

      <div className="daloginborder"></div>
      <div className="dalmain">
        <h4>Login to your account</h4>
      </div>
      {/* <Form onSubmit={submitHandler}>
        <FormGroup controlId="email">
          <Form.Label>emailid</Form.Label>
          <FormControl
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
           <input type="email" 
           placeholder="Email address"  
           id="email" 
           name="email"
          onChange={handleChange}
          value={data.email}
          required
            /> 
        {/* </FormGroup>

        <FormGroup controlId="pass">
          <Form.Label>Passwordid</Form.Label>
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
           <input type="password" 
           placeholder="Password" 
           id="pass"
           name="password"
          onChange={handleChange}
          value={data.password}
          required
           /> 
           {error && <div className="Error_msg">{error}</div>}
          <button className="dabut" onClick = {handleSubmit} >Login</button>
        {/* </FormGroup>
      </Form> */}
    </div>
  );
};
export default Dashboard;
