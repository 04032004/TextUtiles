import React, { useState } from 'react'

export default function Textform(props) {     //function componrent
    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);    
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);    
    }
    const clear = () => {
        
        let newtext = " ";
        setText(newtext);    
    }
    const readTxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            setText(event.target.result);
        };
        reader.readAsText(file);
    }

    const handleOnChange = (event) => {     //to handle event
       // console.log("on change");
        setText(event.target.value);
    }

    function textToSpeech(){
        const Speech= new SpeechSynthesisUtterance();
        const message= document.getElementById("myBox").value;
        Speech.lang='eng';
        Speech.text= message;
        window.speechSynthesis.speak(Speech); 
}

const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
   }

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}

     const [text, setText] = useState('');      //text ia are state //useState is a type of hook
     // to update state we write  setText(" pierjgiprwhg ");
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={clear}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={textToSpeech}>Speech</button>
            <input type="file" className="btn btn-secondary my-3" accept="text/plain" onChange = {readTxt}/>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=> { return element.length !== 0}) } words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
  )
}





