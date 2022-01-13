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

    return (
      <div> 
        <h1>This page is for Admin!</h1>

        {/*Go trough the data of database and return all data to the list. */}
        <ul>
        {state.map((id, index) => (<AdminComponent key={index} id={id.id} tag={id.tag} english={id.english} finnish={id.finnish} /> ))}
        </ul>
        
      </div>
    ) 
}

export default AdminView;
