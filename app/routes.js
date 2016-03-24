import React from 'react';
import {Route} from 'react-router';
import App from './components/admin/App'; 
import Home from './components/admin/category/Home';
import Addbook from './components/admin/category/Addbook';
import ListBooks from './components/admin/category/ListBooks';
import Book from './components/admin/category/Book';
import Users from './components/admin/usermanage/user';
import ViewUser from './components/admin/usermanage/viewuser';
import Post from './components/admin/post/AddPost';
export default (
  <Route component={App}>
    <Route path='/admin' component={Home} />
    <Route path='/category/book/:id' component={Book} />
    <Route path='/category/Addbook' component={Addbook} />
    <Route path='/category/listBooks' component={ListBooks} />   
    <Route path='/admin/user/view' component={Users} />   
    <Route path='/admin/user/:id' component={ViewUser} />
    <Route path='/admin/post/view' component={Post} /> 

  </Route>
);