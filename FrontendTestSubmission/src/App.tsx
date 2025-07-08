import { useEffect, useState } from 'react'
import './App.css'
// import { Log } from "";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HandleLinks from './HandleLinks';
import Short from './Short';


function App() {


  const [urls , setUrls] = useState([{longurl:"Enter long URL",validity:"Enter Validity",shortcode:"SHORTCODE"}]);
  
  useEffect(()=>{


    // Log("frontend", "info", "api", "App Mounted");


  },[])

  return (
    <>

      <BrowserRouter>

      <Routes>
          <Route path="" element={<HandleLinks  urls={urls} setUrls={setUrls} />} />
          <Route path="short/:shortone" element={<Short  urls={urls} setUrls={setUrls} />} />
          

      </Routes>
      
      </BrowserRouter>

      
    </>
  )
}

export default App
