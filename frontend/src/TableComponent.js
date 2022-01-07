import React from "react";
// import { useState } from "react";
import UserView from "./User";


function TableComponent(props) {
  // const [check, setCheck] = useState([]);

  //Tee virheentarkistus tähän!

   function checkInput () {
    if (props.finnish==="kissa") {
      console.log("JEE");
    }
  }
return ( 
  <div>
    {props.english}
    <input
    placeholder="Make your quest"
    onClick={checkInput}
    ></input>
    checkInput={checkInput}
  </div>
)
}

export default TableComponent;

