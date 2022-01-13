import React from "react";
import Button from '@mui/material/Button';


function AdminComponent(props) {

return ( 

    <li >
       {/*Return category, enlgish word and finnish word as a list*/}
      {props.tag+ " "} 
      {props.english + " "}
      {props.finnish + " "}

      {/* Return delete -button. It calls deleteWord -function, when cliked. */}
      <Button>
        &times;
      </Button>
    </li>
)
}

export default AdminComponent;