import React ,{useState}from 'react';

export default function Textform(props) {
  const handleUpClick = ()=> {
    let nText = text.toUpperCase();
    setText(nText);
    props.showAlert("Converted to Uppercase mode is enabled", "success");
  }
  const handleLowClick = ()=> {
    let nText = text.toLowerCase();
    setText(nText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const clear = ()=> {
    let nText = ('');
    setText(nText);
    props.showAlert("text Cleared", "success");
  }
  const extractEmail = ()=> {
    let nText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setText(nText);
    props.showAlert("Email Extracted", "success");
  }
  const handleOnChange = (event)=> {
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter the Text');
  return (
    <>
    <h1>{props.heading}</h1>

      <div className="form-group" style={{backgroundColor:props.mode ==='light'?'grey':'white'}}>
           <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox"  rows="8" ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}> Convert To uppercase</button>
      <button className='btn btn-warning' onClick={handleLowClick}> Convert To lowercase</button>
      <button className='btn btn-success' onClick={clear}> Clear</button>
      <button className='btn btn-danger' onClick={extractEmail}> Email Extractor</button>
    </>
  )
}
