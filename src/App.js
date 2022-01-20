import React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import Home from './views/Home'
import Map from './views/Map'
import SinglePost from './views/SinglePost'


const App = () => {
  return (    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/map" element={<Map/>}/> 
        <Route path="/post/:slug" element={<SinglePost/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
