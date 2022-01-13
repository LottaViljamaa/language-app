import React from 'react';
import { useState } from 'react';
import TableComponent from './TableComponent';
import TableComponent2 from './TableComponent2';

function UserView ({checkInput}) {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);

  function getAll() {
    fetch("http://localhost:8080/languageApp/")
      .then(responde => responde.json())
      .then(data => setState(data))
  }

  function getAll2() {
    fetch("http://localhost:8080/languageApp/")
      .then(responde => responde.json())
      .then(data => setState2(data))
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