

import React, {useState} from 'react'
// useState is react hook 
 

export default function TextForm(props) {
  const [text, setText]=useState("");
  // text="new text" //Wrong way to change the state
  // setText("new text") //Correct way to change the state

  const handleUpClick=()=>{
      // console.log("UpperCase was clicked!!" + text)
      let newtext= text.toUpperCase();
      setText(newtext)
  }
  const handleEmailClick=()=>{
    // const passedData= event.clipboardData.getData("text")
      let newtext=text.match(/[\w\d_-]+@[\w\d._-]+\.[\w\d._-]+)/g);
      console.log(newtext)
      // setText(text2.join("\n"));

  }
  const handleLoClick=()=>{
      let newtext= text.toLowerCase();
      setText(newtext)
  }
  
  const handleClearClick=()=>{
      let newtext= ' ';
      setText(newtext)
  }
  const handleCopyClick=()=>{
    let newtext= document.getElementById("myBox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);

  }
  const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/)
    setText(newtext.join(" "));
  }
  const handleOnChange=(event)=>{
      // console.log("On Change!!")
      setText(event.target.value)
  }

  return (
    <>
     <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>{props.heading}</h2>
          <div className="mb-3">
          <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#21243c":"white" ,color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
          </div>
        <button className='btn btn-info mx-2' onClick={handleUpClick}>To UpperCase </button>
        <button className='btn btn-success mx-2' onClick={handleLoClick}>To LowerCase </button>
        <button className='btn btn-secondary mx-2' onClick={handleClearClick}> Clear Text</button>
        <button className='btn btn-success mx-2' onClick={handleCopyClick}> Copy Text</button>
        <button className='btn btn-info mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        <button className='btn btn-success mx-2' onClick={handleEmailClick}>Extract Email Addresses </button>
      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p> <b>{text.split(" ").length} Words, {text.length} Characters</b></p>
        <p><b>{0.008 * text.split(" ").length} Minutes Read</b></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the Text-Box above to preview it here"}</p>
      </div>
    </>
   
  )
}
