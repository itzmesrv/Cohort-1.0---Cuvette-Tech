import React from "react";
import './Bgrem.css'
import logo from "./logo.png"
const Bgrem = () => {
    return (

        <div className="bgremmain">
            <div className = "remlogo">
            <img src={logo} alt="logo"/>
            <div className = "bgfirstrect"></div>
            <div className = "bglogo"></div>
            <div className = "bgprimtext1"><h6>Remove image</h6></div>
            <div className = "bgprimtext11"> <h6>background</h6></div>
            <div className="bgprimtext2"><h5>100% automatic and free</h5></div>
            <div className="bgsecrect"></div>
            <div className ="bgimg"></div>
            <div className ="bgsectext1"><h4>File should be png, jpg and less than 5mb</h4></div>
            <button className ="bgbut">Upload Image</button>
            <button className ="bgbut1">Or drop a file</button>
        </div>
            
        </div>
    )
}
export default Bgrem;