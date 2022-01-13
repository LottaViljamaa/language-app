import React from "react";


function TableComponent2(props) {
 
  function checkInput(e) {
     //Take user input
    const rightAnswer = e.target.value

    //If user input matches to the word in the database, 
    //it will put to the list with other right words.
    //Otherwise it will put to the list with other wrong answers. 
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

