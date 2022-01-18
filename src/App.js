import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Map from './pages/Map'

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
