
import './App.css';
import Navbar from './components/Navbar';
// import Button from './components/Button';
// import About from './components/About';
import React ,{ useState } from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('hello');
  const showAlert =(Message, type)=>{
    setAlert({
      msg:Message,
      type:type
    })
    setTimeout(() => {
      
    }, 1500);
  }
  const toggleMode = ()=> {
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#212529";
      showAlert("Dark mode is enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="#FFFFFF";
      showAlert("light mode is enabled", "success");
    }
  }
 
  
  return (
    <>
    {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
          {/* <Button blueclr="Indigo" pinkclr="Dark Blood Red" /> */}
          <div className="container my-3">
          
              {/* <Routes>
             
                <Route exact path="/about"   //exact path is used by react for exact matching of pages 
                element={<About/>}>
                </Route>
                <Route exact path="/"
                element= {}>
                </Route>
              </Routes> */}
             <Textform heading="Enter the Text Analyzer"mode={mode} showAlert={showAlert}/>
          </div>
    {/* </Router> */}
    </>
  );
}

export default App;
