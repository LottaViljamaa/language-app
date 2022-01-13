import './App.css';
import React from 'react';

function Welcome() {
    return (
      <div className='container'>
        <div className='content'>
          {/* Return the content of the first page of the app.*/}
          <h1 className='header'>Welcome</h1>
          <h2>How to use</h2>
          <h3>Admin</h3>
          <p>On the Admin -page you see the list of all word pairs.</p>
          <h4>Delete</h4>
          <p>You can delete word pairs from the button located right on the word pair.  </p>
          <h4>Add</h4>
          <p>You can add new word pairs on the bottom of the page. You need to fill all the input fields
            to add new word pair. Write a category, English translation and Finnish translation. After
            that, press "ADD" -button and you can see the word pair displaying on the bottom of the whole list.</p>
          <h3>User</h3>
          <p>First choose the language, which you want  to write. List of word pairs appears. Write your answers and after that
            press "SUBMIT ANSWERS" -button. You can see the amount of right answers on the right side of the button.
          </p>
        </div>
        <div className='footer'>
          <h2>Lotta Viljamaa</h2>
          <h3>Tampere University of Applied Sciences</h3>
          <h3>14.1.2022</h3>
        </div>
      </div>
    ) 
}

export default Welcome;
