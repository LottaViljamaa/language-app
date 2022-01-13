import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import AdminComponent from './AdminComponent';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';



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
    console.log(tagWord);
    console.log(englisWord);
    console.log(finnishWord);

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
      <div> 
        <h1>This page is for Admin!</h1>
       {/*Call handelubmit -function, when click the add -button */}
       <form onSubmit={handleSubmit}>

        {/*Go trough the data of database and return all data to the list. */}
        <ul>
        {state.map((id, index) => (<AdminComponent key={index} id={id.id} tag={id.tag} english={id.english} finnish={id.finnish} deleteWord={deleteWord} /> ))}
        </ul>

        {/* Input field to add category. Calls function, which take user input. */}
         <Input
          placeholder="Write a category"
          value={tagWord}
          onChange={handleTag}
          required
        ></Input>

        {/* Input field to add English word. Calls function, which take user input. */}
        <Input
          placeholder="Write word in English"
          value={englisWord}
          onChange={handleEnglish}
          required
        ></Input>

        {/* Input field to add Finninsh word. Calls function, which take user input. */}
        <Input
          placeholder="Write word in Finnish"
          value={finnishWord}
          onChange={handleFinnish}
          required
        ></Input>

        {/* Add -button */}
        <Button type='submit'>Add</Button>
        </form>
      </div>
    ) 
}

export default AdminView;
