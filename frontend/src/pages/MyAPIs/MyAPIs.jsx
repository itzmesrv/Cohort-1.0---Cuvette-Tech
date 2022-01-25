import React from "react";
import './MyAPIs.css'
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import APIs from "../../components/cards/app"
const MyAPIs = () => {
    return (
        <div className="apimain">
            <div className ="apilogo">
                    <img src={logo} alt="logo"/> 
            </div>
            
            <button className ="apiacc">My Account</button>
            <button className ="apiapi">My APIs</button>
            <button className ="apibut">+New API</button>
            <button className ="apiout">Logout</button>

            <div className ="apirect">
                <div className ="aapitext"><h3>Your uploaded APIs</h3></div> 
                <div className = "apiapps">
            <APIs img={logo1} title={"Background Remove"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
            <APIs img={logo2} title={"What Font"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
            <APIs img={logo3} title={"HTTPS Everywhere"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
            <APIs img={logo4} title={"Stay Focusd"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
            </div>
            </div>
            
            
        </div>
    )
}
export default MyAPIs;