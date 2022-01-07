import React from "react";
// import { useState } from "react";
import UserView from "./User";


function TableComponent2(props) {
  // const [check, setCheck] = useState([]);

  //Tee virheentarkistus tähän!

   const checkInput = () => {
    if (props.finnish==="kissa") {
      console.log("JEE");
    }
  }
return ( 
  <div>
    <ul>
      
      <input
      placeholder="Make your quest"
      onClick={checkInput}
      ></input>{props.finnish}
    </ul>
    <button></button>
  </div>
)
}

export default TableComponent2;

