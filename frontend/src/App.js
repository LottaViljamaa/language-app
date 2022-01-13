import './App.css';
import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Welcome from './Welcome';
import AdminView from './Admin'
import UserView from './User';


function App() {
    return (
      <BrowserRouter>
      {/* Return navigation bar as a list. */}
      {/* Link to the right url to display the right page */}
      <nav className="navigaatiopalkki">
        <ul>
          
          <li className="Welcome">
            <Link to="/">Tervetuloa</Link>
          </li>

          <li className="ToinenSivu">
            <Link to="admin">Admin</Link>
          </li>
          
          <li className="KolmasSivu">
            <Link to="user">User</Link>
          </li>
        </ul>
        </nav> 
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="admin" element={<AdminView/>} />
            <Route path="user" element={<UserView/> } />
          </Routes>
      </BrowserRouter>
    ) 
}

export default App;