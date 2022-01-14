import React from "react";
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function AdminComponent(props) {

return ( 
  <TableRow className="Admintable"> 
  {/*Return category, enlgish word and finnish word as a list*/}
    <TableCell align="centre">{props.finnish}</TableCell>
    <TableCell align="centre">{props.english}</TableCell>
    <TableCell align="centre">{props.category}</TableCell>
 
      {/* Return delete -button. It calls deleteWord -function, when cliked. */}
      <Button 
        sx={{ height: 50}}
        variant="contained"
        className="deleteWord"
        onClick={() => props.deleteWord(props.id)}>
        &times;
      </Button>
    </TableRow>
)
}

export default AdminComponent;