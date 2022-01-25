import React from "react";
import './Homepage.css'
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import OutAPIs from "../../components/cards/app"
const Homepage = () => {
    return (
        <div className="homemain">
            <div className = "homelogo">
            <img src={logo} alt="logo"/>
            </div>
            <div className = "homegroup"></div>
            {/* < button className ="login">Login/Signup</button> */}

            <form method="get" action="../../Register">
              <button className="homelogin" type="submit">Login/Signup</button>
           </form>

            <div className ="homewholerect">
                <div className ="homefirstrect">
                <div className = "homebgrem"></div>
                <div className = "homepurprect"></div>
                <h6 className = "hometext1">BACKGROUND IMAGE REMOVE</h6>
                <h5 className = "hometext2">100% automatic and free</h5>
                <button className ="homebutt">View App</button>
                </div>
                <div className = "homesecondrect">
                <h4>All</h4>
                <div className = "homesecondrect1"> <h4> APIs</h4></div>
                <div className="homeoutapps">
                <OutAPIs img={logo1} title={"Background Remove"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
                <OutAPIs img={logo2} title={"What Font"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
                <OutAPIs img={logo3} title={"HTTPS Everywhere"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
                <OutAPIs img={logo4} title={"Stay Focusd"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
                </div>
                </div>
        
        </div>
        </div>
    )
}
export default Homepage;