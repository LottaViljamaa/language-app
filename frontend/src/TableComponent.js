import React from "react";
import './App.css';
import Input from '@mui/material/Input';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



function TableComponent(props) {

  //Take user input
  function checkInput(e) {
    const rightAnswer1 = e.target.value

    //Lowercase the user input
    const rightAnswer2 = rightAnswer1.toLowerCase();

    //Delete extra spaces from the end of the user input  
    const removeExtraSpace = (s) => s.trim().split(/ + /).join(" ");

    //Set edited input into the variable
    //If user input matches to the word in the database, 
    //it will put to the list with other right words.
    //Otherwise it will put to the list with other wrong answers. 
    const rightAnswer = removeExtraSpace(rightAnswer2);
      if (rightAnswer===props.finnish) {
        props.rightAnswer(rightAnswer);
      } else {
        props.wrongAnswer(rightAnswer);
      }
  }

return ( 
  <TableRow className="table">
    <TableCell className="componentEnglish" align="centre">
      <Input
        placeholder="Write your answer"
        onBlur={checkInput}
      ></Input>
    </TableCell>
    <TableCell className="componentEnglish" align="centre">{props.english}</TableCell>
    <TableCell className="componentEnglish" align="centre">{props.category}</TableCell>
  </TableRow>
)
}

export default TableComponent;

