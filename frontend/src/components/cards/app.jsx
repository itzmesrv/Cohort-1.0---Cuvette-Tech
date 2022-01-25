import React from 'react';
import './app.css';

const app = (props) =>  {
  return <div className="container" id="flex-container">
  <div className="card" id="appcard">
  <img src={props.img} className="card-img" id="app-img" alt="1"/>

  <div> <p   className="card-title" id="card-title" >{props.title}</p>
    <p className="card-text">{props.des}</p>
  </div>
</div>
</div>
  
}

export default app;
{/* <div className="card">
<img src={} className="card-img" alt="1"/>
  <div className="card-title">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content</p>
  </div>
</div>
</div> */}


{/* <div className="flex-container"></div> */}

{/* <div className = "card"> 
  <img className = "card-img" src ={props.img} alt="lo"/>
      <p className="card-title">Background Remove</p>
          <p className="card-text">The descriptipn of the API in quick brief and we will truncate it here...</p>
  </div>; */}