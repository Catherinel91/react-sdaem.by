import React from "react";
import { Routes, Route,Link}  from "react-router-dom";
import axios from "axios";

import { Header, Footer} from "./components";
import { Home} from "./pages";


function App() {
 
  
  return (
   
    <div className="wrapper"> 
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
    </div>
  );
}


export default App;
