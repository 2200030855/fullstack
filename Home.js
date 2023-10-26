import React, { useState } from 'react'

export default function Home() {
    //declare hook to store data coming from textarea
    const[text,setText]=useState("Enter text here");
    //define arrow function to handle data which is updated by user
    const updateText=(e)=>
    {

setText(e.target.value)
    }
    //define arrow function to handle to convert to upper case 
    const convertToupper=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
    }
    const convertolower=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearText=()=>
    {
        let newText="";
        setText(newText);
    }
    const copyText=()=>
    {
        navigator.clipboard.writeText(text);
    }
    


    
  return (
    <>
    <div>
      
      <h1>
        this is home page
      </h1>
    </div>
    <div>
        <textarea className='from-control' id='ta' rows="10 " cols="50" value={text} onChange={updateText}>

        </textarea>
    </div>
 <div className="container">
   <button className="btn btn-primary" onClick={convertToupper}>
    convert to upper
   </button>
   <button className="btn btn-primary mx-2"onClick={convertolower}>
    convert to lower
   </button>
   <button className="btn btn-primary mx-2 " onClick={clearText}>
    clear
   </button>
   <button className="btn btn-primary" onClick={copyText}>
    copy to clipboard
   </button>
 </div>

 <div className='container my-3'>
  
  <h1> Text summary : </h1>
   </div>
   <div className='container my-3'>  
      <p>{ text.split(" ").length}  words </p>
      <p> It contains {text.length} </p>

      </div>
      <div> 
        <h1> Preview</h1>
        {text}
      </div>
    </>

  )
}
