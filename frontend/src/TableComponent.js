import React from "react";


function TableComponent(props) {

  //Take user input
  function checkInput(e) {
    const rightAnswer = e.target.value
    //If user input matches to the word in the database, 
    //it will put to the list with other right words.
    //Otherwise it will put to the list with other wrong answers. 
      if (rightAnswer===props.finnish) {
        props.rightAnswer(rightAnswer);
      } else {
        props.wrongAnswer(rightAnswer);
      }
  }

return ( 
  <div>
    {/* Return  input field and English word. OnBlur calls the checkInput function, which checks user's input. */}
   <ul key={props.id}>
     <input
      placeholder="Write your answer"
      onBlur={checkInput}
      ></input>
      {" " + props.english}
    </ul> 
  </div>
)
}

export default TableComponent;

