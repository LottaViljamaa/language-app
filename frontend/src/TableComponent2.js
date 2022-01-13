import React from "react";


function TableComponent2(props) {
  
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
      if (rightAnswer===props.english) {
        props.rightAnswer(rightAnswer);
      } else {
        props.wrongAnswer(rightAnswer);
      }
  }

return ( 
  <div>
    {/* Return  input field and Finnish word. OnBlur calls the checkInput function, which checks user's input. */}
    <ul key={props.id}> 
      <input
      placeholder="Write your answer"
      onBlur={checkInput}
      ></input>{ " " + props.finnish}
    </ul>
  </div>
)
}


export default TableComponent2;

