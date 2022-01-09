import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Details from "./Pages/Detail";

function App() {

    
    return (
        <Router>
          
          <Routes>
            <Route path="*/reactapi/" element={<Home />} /> 
            <Route path="*/Home" element={<Home />} />
            <Route exact path='*/Detail/*'  element={<Details />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
         
        </Router>
      );
  

    

}


export default App;
