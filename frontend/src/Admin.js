import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import AdminComponent from './AdminComponent';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function AdminView() {
  const [state, setState] = useState([]);
  const [id, setId] = useState('');
  const [tagWord, setTagWord] = useState('');
  const [englisWord, setEnglisWord] = useState('');
  const [finnishWord, setFinnishWord] = useState('');

  //Connect to database and return all data when changes are made on the page
  useEffect(() => {
      fetch("http://localhost:8080/languageApp/")
        .then(response => response.json())
        .then(data => setState(data))
  },[])

   //Take user tag input
   const handleTag = e => {
    setTagWord(e.target.value);
  }

  //Take user English input
  const handleEnglish = e => {
    setEnglisWord(e.target.value);
  }

  //Take user Finnish input
  const handleFinnish = e => {
    setFinnishWord(e.target.value);
  }

  //Connect to the database and put the user inputs into it.  
  function handleSubmit(e) {
    fetch("http://localhost:8080/languageApp/", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        tag: tagWord,
        english: englisWord,
        finnish: finnishWord
      })
      
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
    //Set user input empty
    setTagWord('');
    setEnglisWord('');
    setFinnishWord('');
  }

  //Connect to the database and delete the word pair with right id. 
  function deleteWord(id) {
    const deleteWord = [...state].filter(wordPar => wordPar.id !== id)
    setState(deleteWord);
    fetch("http://localhost:8080/languageApp/" + id, {
      method: 'DELETE',
      header: {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    })
    
  }

    return ( 
    <form className='AdminPage' onSubmit={handleSubmit}>  
      <h2>Add new word pair</h2>
      {/* Input field to add Finninsh word. Calls function, which take user input. */}
      <Input
        className="inputfield"
        placeholder="Write word in Finnish"
        value={finnishWord}
        onChange={handleFinnish}
        required
      ></Input>

      {/* Input field to add English word. Calls function, which take user input. */}
      <Input
        className="inputfield"
         placeholder="Write word in English"
          value={englisWord}
          onChange={handleEnglish}
          required
      ></Input>
        
      {/* Input field to add category. Calls function, which take user input. */}
      <Input
        className="inputfield"
        placeholder="Write a category"
        value={tagWord}
        onChange={handleTag}
        required
      ></Input>

      {/* Add -button */}
      <Button sx={{ m: 2 }} variant="contained" type='submit'>Add</Button>

      <h2>Word pairs:</h2> 

      {/*Call handelubmit -function, when click the add -button */}
      <TableContainer align-items="centre">
        <Table align="centre" >
          <TableHead className="Tableheader2" align="centre">
            <TableRow align="centre">
              <TableCell>Finnish</TableCell>
              <TableCell align="centre">English</TableCell>
              <TableCell align="centre">Category</TableCell>
            </TableRow>
          </TableHead>
        {/*Go trough the data of database and return all data to the list. 
        Call admincomponenet to display chosen data and delete -button.*/}
        <TableBody align="centre">
          {state.map((id, index) => (<AdminComponent key={index} id={id.id} category={id.tag} english={id.english} finnish={id.finnish} deleteWord={deleteWord} /> ))}
        </TableBody>
      </Table>
    </TableContainer>
    </form>
    ) 
}

export default AdminView;
