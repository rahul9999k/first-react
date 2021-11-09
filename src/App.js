import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";





function App() {
  const [mode, setmode]= useState('light'); 
 
  const[alert, setAlert]=useState(null);
  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }

  
  
  const toggleMode = ()=>{
    if (mode === "dark"){
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert("Dark mode enabled","danger")
      document.title="TextUtils-Dark Mode"
    }
    else{
      setmode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("light mode enabled","success")
      document.title="TextUtils-Light Mode"
    }
  }
  return (
<>
{/* <Router> */}
  <Navbar title="Navbar" mode={mode} togglemode={toggleMode}/>
  <Alert alert={alert}/>
  {/* <TextForm mode={mode} showAlert={showAlert}/> */}
  <About/>
  {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
  
  </Router> */}
  </>




  );
}

export default App;
