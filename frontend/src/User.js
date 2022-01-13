import React from 'react';
import './App.css';
import { useState } from 'react';
import TableComponent from './TableComponent';
import TableComponent2 from './TableComponent2';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

  //initialize the variable, which will count the score of right answers. 
  let score = 0;

  //Initialize the empty list, where right answers will be puttted. 
  var list = [];

function UserView ({checkInput}) {
  const [state, setState] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [component, setComponent] = useState([]);

  //Connects to the database
  const getAll = async () => {
    const result = await fetch("http://localhost:8080/languageApp/");
    const componenets = await result.json();
    //Go trough data from the database and put it to the variable. 
    //Return data and TAblekomponenct, which sohws chosen content.
    const k = componenets.map((index) => {
      return <TableComponent key={index} category={index.tag} english={index.english} finnish={index.finnish} rightAnswer={rightAnswer} wrongAnswer={wrongAnswer}/>;
    });
    setState(k);
    setComponent(
      <TableHead className="Tableheader">
      <TableRow>
        <TableCell>Finnish</TableCell>
        <TableCell align="right">English</TableCell>
        <TableCell align="right">Category</TableCell>
      </TableRow>
    </TableHead>
    );
  }

  //Connects to the database
  const getAll2 = async () => {
    const result = await fetch("http://localhost:8080/languageApp/");
    const componenets2 = await result.json();

    //Go trough data from the database and put it to the variable. 
    //Return data and TAblekomponenct, which sohws chosen content.
    const k = componenets2.map((index) => {
      return <TableComponent2  key={index} category={index.tag} english={index.english} finnish={index.finnish} rightAnswer={rightAnswer} wrongAnswer={wrongAnswer}/>;
    });
    setState(k);
    setComponent(
      <TableHead>
      <TableRow>
        <TableCell>English</TableCell>
        <TableCell align="right">Finnish</TableCell>
        <TableCell align="right">Category</TableCell>
      </TableRow>
    </TableHead>
    );
  }

  //This function is called, id user's answer is right
  //Take right answer and put it to the list.
  //Grow score 
  function rightAnswer(a) {
    score ++;
    console.log("Tämä on a : " + a);
    console.log("Your score is: " + score);
    list.push(a);
  }

  //Function is called, if user's answer is wrong
  function wrongAnswer() {
    console.log("Wrong answer");
  }

  //Print the score, when submit -button is cliked
  function userAnswers() {
    console.log(list);
    setAnswerList("Right answers: " + score);
  }

  return (
    <div>
      {/* Return buttons. User can decide the learning language. */}
      <Button className='getAll'
        onClick={getAll}>Learn in Finnish 
        
      </Button>
    
      <Button className='getAll2'
        onClick={getAll2}>Learn in English
      </Button>

      <TableContainer>
        <Table sx={{maxWidth: 400}}>
          {component}
          <TableBody>
            {state}
          </TableBody>
        </Table>
      </TableContainer>

       {/* Return submit answer -button. It will call the useAnswer -function. */}
       <Button 
      onClick={() => userAnswers()}
        >Submit answers
      </Button>
      {answerList}
    </div>
  )
}

export default UserView;