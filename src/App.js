import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Map from './views/Map'

const App = () => {
  return (    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/map" element={<Map/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
