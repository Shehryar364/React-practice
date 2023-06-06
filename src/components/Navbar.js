import React from 'react';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
  <>
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <Link className="nav-link" to="/">Home </Link> */}
         <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        {/* <Link className="nav-link" to="/about">About</Link> */}
        <a className="nav-link" href="/">About </a>
      </li>
    
     
     
    </ul>
   
  </div>
      <div className={`custom-control custom-switch text-${props.mode ==='light'?'dark':'light'}`}>
              <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
              <label className="custom-control-label" htmlFor="customSwitch1">Enter to Change The Mode</label>
      </div>
</nav>
      <div className="container">
       <button className="btn btn-primary">blue</button>
       <button className="btn btn-dark">black</button>
       <button className="btn btn-success">green</button>
       <button className="btn btn-danger">red</button>
       <button className="btn btn-warning">pink</button>
    </div>
    </div>


  </>
  );
}
