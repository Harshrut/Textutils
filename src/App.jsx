import { useState } from 'react';
import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import Alert from './components/Alert';

// import About from './components/about';




function App() {
  const [alert,setAlert]= useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    
   } 
 
  const [mode, setMode] = useState('light');
 

 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled ","success");
      // document.title = "Textutils - DarkMode";
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been disabled ","success");
      // document.title = "Textutils - LightMode";
    }
  }
  // const router = createBrowserRouter([
  //   {
  //    path : "/",
  //    element : <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /><About /></>
  //   },
  //   {
  //    path:"/home",
  //    element: <><Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /><Textform showAlert={showAlert} heading="Enter text to analyze below" mode={mode} /></>
  //   },
  // ])

    return (
    <>
  <div className="App">
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <Textform showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />
   <div className="container my-3">
    {/* <RouterProvider router={router}/> */}

   
   </div>
  </div>  
  </>
  );
}

export default App;
