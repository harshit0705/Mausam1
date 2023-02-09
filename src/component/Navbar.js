import React from "react";
import Nav from "./Navbar.module.css";



export default function Navbar(props) {
  const inputRef = React.createRef();
  const searchit=(event)=>{
    if (event.keyCode === 13){
      props.newcity(inputRef.current.value)
     
   
    }
  }
  const handlebuttonclick=()=>{
    props.newcity(inputRef.current.value)
       
  }
  return (
    <div>
      <div className={Nav.main_container}>
        <div className={Nav.name}>
          <img src="logo.png" alt="logo" />
        </div>
        <div className="input-group mb-3 vh-30" id={Nav.boot}>
          <input
          spellCheck="false"
            ref={inputRef}
            onKeyDown={searchit}
            type="text"
            className="form-control"
            placeholder="City Name "
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-primary color-red"
            type="button"
            id="button-addon2"
            onClick={handlebuttonclick}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
