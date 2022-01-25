import React from "react";
import './Marketplace.css'
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import logo3 from "./logo3.png"
import logo4 from "./logo4.png"
import MAPIs from "../../components/cards/app"
const Marketplace = () => {
    return (
        <div className="hmain">
            <div className = "malogo">
            <img src={logo} alt="logo"/>
        </div>
        <div className = "magroup"></div>
        <button className ="maacc">My Account</button>
        <button className ="maapi">My APIs</button>
        <button className ="mabut">+New API</button>
        <form method="get" action="../../">
              <button className="maout" type="submit">Logout</button>
           </form>
        <div className ="mawholerect">
            <div className ="mafirstrect">
                <div className = "mabgrem">
                </div>
                <div className = "mapurprect">
                </div>
                <h6 className = "matext1">BACKGROUND IMAGE REMOVE</h6>
                <h5 className = "matext2">100% automatic and free</h5>
                <button className ="mabutt">View App</button>
            </div>
            <div className = "msecondrect">
                <h4>All</h4>
                <div className = "msecondrect1"> <h4> APIs</h4></div>
                <div className="mapps">
                <MAPIs img={logo1} title={"Background Remove"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
                <MAPIs img={logo2} title={"What Font"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
                <MAPIs img={logo3} title={"HTTPS Everywhere"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
                <MAPIs img={logo4} title={"Stay Focusd"} des={"The descriptipn of the API in quick brief and we will truncate it here..."}/>
                </div>
        </div>
        
        </div>
        </div>
    )
}
export default Marketplace;