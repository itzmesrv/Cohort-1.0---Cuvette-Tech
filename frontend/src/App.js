import React from 'react';

   import {BrowserRouter ,Routes, Route } from 'react-router-dom';
  import Dashboard from './pages/Dashboard/Dashboard';
import Marketplace from './pages/Marketplace/Marketplace';
 import MyAPIs from './pages/MyAPIs/MyAPIs';
  import Homepage from './pages/Homepage/Homepage';
 import Register from './pages/Register/Register';
import Bgrem from './pages/Bgrem/Bgrem';

function App() {
  return (
    <div className="App">
      
        
               <BrowserRouter>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Marketplace" element={<Marketplace/>}/>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Bgrem" element={<Bgrem/>}/>
            <Route path="/MyAPIs" element={<MyAPIs/>}/>
          </Routes>
        </BrowserRouter>               
    </div>
  );
}

export default App;