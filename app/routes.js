import React from 'react';
import {Route} from 'react-router';
import App from './components/App'; 
import Home from './components/Home';
import Addbook from './components/Addbook';
import Addcharacter from './components/AddCharacter';
import ListBooks from './components/ListBooks';
import Editbook from './components/Editbook';
import Book from './components/Book'
export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/add' component={Addcharacter} />
    <Route path='/book/:id' component={Book} />
    <Route path='/book/edit/:id' component={Editbook} />
    <Route path='/Addbook' component={Addbook} />
    <Route path='/listBooks' component={ListBooks} />  
  </Route>
);