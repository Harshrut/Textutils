import React, {useState} from 'react'


const textform = (props) => {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
   setText(newText); 
   props.showAlert("Converted to UpperCase","success");
  }
  const handleloClick = ()=>{
    let newText = text.toLowerCase();
   setText(newText); 
   props.showAlert("Converted to lowercase","success");
  }
  const handleclearClick = ()=>{
    let newText = ("");
   setText(newText); 
   props.showAlert("all the texts has been cleared!","success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking!","success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text , setText] = useState('');
   return (
    <>
    <div className="container" style= {{color: props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="5" ></textarea>
        </div>
        <button className="btn btn-dark mx-1" onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-dark mx-1" onClick={handleloClick}>Convert to lowercase</button>
        <button className="btn btn-dark mx-1"  onClick={handleclearClick}>clear text </button>
        <button type="submit" onClick={speak} className="btn btn-dark mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'black' }}>
      <h1>Your text summary</h1>
      <p>{(Text.length>0)?Text.trim().split(" ").length:0}words and {text.length} alphabates</p>
      <p>{0.008 * text.split(" ").length} Mintutes to read </p>
      <h2> Preview </h2>
      <p>{text.length>0?text:"Enter something above to preview it here "}</p>
    </div>
   
    </>
  )
}

export default textform
