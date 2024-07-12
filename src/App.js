 import React ,{ useState } from 'react';
import './App.css';                          //IMPORTING CSS
//import './About.js';
import Navbar from './components.js/Navbar';
 import Textform from './components.js/Textform';
 //import Alert from './components.js/Alert';

function App() {     //USING FUNCTION BASEC COMPONENTT
  const[Mode, setMode] = useState('light');   //whether dark mode enable or not

// const [alert , setAlert]= useState(null);
// const showAlert = (message , type) => {
//   setAlert({
//     msg: message,
//     Type: type
// })
// }

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        document.title = "TextUtils - Dark Mode";
        // showAlert("Dark mode has been enbled" , "success");
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.title = "TextUtils - Light Mode";
        //showAlert("Light mode has been enbled" , "success");
    }
}
  return ( 
      <>       
         {/* //JSX FRAGMENT FEATURE */}
    
       {/* <Navbar title= "Textutiles2" abouttext = "About textutiles" /> 
        */}
      
          <Navbar title="TextUtils" Mode ={Mode} toggleMode={toggleMode}/> 
          {/* <Alert alert={alert}/> */}
          <div className="container my-3">  
          
          <Textform Heading = "Enter the text to analyse" mode={Mode}/>
          {/* <About Mode={Mode}/> */}
      
      
       
             {/* {/* USING ABOUT COMPONENET IN OUR APP */}
            
          </div>
          
      </>
  );
}

export default App;
