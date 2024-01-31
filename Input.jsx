import React, { useRef } from "react";

function Input(props) {
  const inpref = useRef();
  // function btnhai(){
  //   console.log(inpref.current.value);
  //   inpref.current.value= "  ";
  // }
  function btnclick() {
    if (inpref.current.value !== " ") {
      props.handler(inpref.current.value);
      inpref.current.value =" ";
    }
  }
  return (
    <div>
      <div className="row my-3">
        <div className="col-10">
          <input className="container-fluid" type="text" ref={inpref} />
        </div>
        <div className="col-2">
          <button
            onClick={btnclick}
            className="btn btn-success container-fluid"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
