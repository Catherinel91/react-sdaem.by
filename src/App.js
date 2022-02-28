import React, {useState} from "react";
import { Routes, Route}  from "react-router-dom";
import axios from "axios";


import { Home, News, NewsDetail} from "./pages";
import Layout from "./components/Layout/Layout";
import Context from "./components/Context";



function App() {  
  
  return (
    <Context.Provider >            
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="news" element={<News/>} />
          <Route path="news/:newsDetail" element={<NewsDetail/>} />
        </Route>
      </Routes>  
    </Context.Provider> 
  );
}


export default App;
