import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import Home from './views/Home'
import Map from './views/Map'
import SinglePost from './views/SinglePost'
import Gallery from './views/Gallery'


const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/map" element={<Map/>}/> 
        <Route path="/post/:slug" element={<SinglePost/>}/> 
        <Route path="/gallery" element={<Gallery/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
