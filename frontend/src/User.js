import React from 'react';
import { useState } from 'react';
import TableComponent from './TableComponent';
import TableComponent2 from './TableComponent2';

function UserView ({checkInput}) {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);

 //Connects to the database
 const getAll = async () => {
  const result = await fetch("http://localhost:8080/languageApp/");
  const componenets = await result.json();
  //Go trough data from the database and put it to the variable. 
  //Return data and TAblekomponenct, which sohws chosen content.
  const k = componenets.map((index) => {
    return <TableComponent key={index} english={index.english} finnish={index.finnish}/>;
  });
  setState(k);
}

   //Connects to the database
   const getAll2 = async () => {
    const result = await fetch("http://localhost:8080/languageApp/");
    const componenets2 = await result.json();

     //Go trough data from the database and put it to the variable. 
    //Return data and TAblekomponenct, which sohws chosen content.
    const k = componenets2.map((index) => {
      return <TableComponent2  key={index} english={index.english} finnish={index.finnish} />;
    });
    setState(k);
  }
  return (
    <div>
      {/* Return buttons. User can decide the learning language. */}
      <button className='getAll'
        onClick={getAll}>Learn in Finnish
      </button>

      <button className='getAll2'
        onClick={getAll2}>Learn in English
      </button>
      <ul>
        {state}
      </ul>

      <ul>
        {state2.map((id) => (<TableComponent2 finnish={id.finnish}/> ))}
      </ul>

      <button 
      onClick={() => checkInput()}
        >Submit answers
      </button>
    </div>
  )
}

export default UserView;