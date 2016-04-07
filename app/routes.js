import React from 'react';
import {Route} from 'react-router';
import App from './components/admin/App';

import HomeDocumentType from './components/admin/documenttype/HomeDocumentType';
import ViewDocumentType from './components/admin/documenttype/ViewDocumentType';

import HomeCategory from './components/admin/category/HomeCategory';
import ViewCategory from './components/admin/category/ViewCategory';

import Users from './components/admin/usermanage/user';
import ViewUser from './components/admin/usermanage/viewuser';
import Post from './components/admin/post/Post';
import Viewpost from './components/admin/post/Viewpost';

import App1 from './components/main/App';

import HomeDocumentType1 from './components/main/documenttype/HomeDocumentType';
import ViewDocumentType1 from './components/main/documenttype/ViewDocumentType';

import HomeCategory1 from './components/main/category/HomeCategory';
import ViewCategory1 from './components/main/category/ViewCategory';

import Users1 from './components/main/usermanage/user';
import ViewUser1 from './components/main/usermanage/viewuser';
import Post1 from './components/main/post/Post';
import Viewpost1 from './components/main/post/Viewpost';



import Addbook from './components/admin/book/Addbook';
import ListBooks from './components/admin/book/ListBooks';
import Editbook from './components/admin/book/Editbook';
import Book from './components/admin/book/Book';

import AddTran from './components/transition/AddTran';
import ListTrans from './components/transition/ListTrans';
import EditTran from './components/transition/EditTran';
import Transition from './components/transition/Transition';

export default (
  <Route>
  <Route component={App}>

    <Route path='/admin' component={HomeDocumentType} />
    <Route path='/admin/document-type' component={HomeDocumentType} />
    <Route path='/admin/document-type/:id' component={ViewDocumentType} />

    <Route path='/admin/category' component={HomeCategory} />
    <Route path='/admin/category/:id' component={ViewCategory} />

    <Route path='/admin/user/view' component={Users} />
    <Route path='/admin/user/:id' component={ViewUser} />
    <Route path='/admin/post' component={Post} />
    <Route path='/admin/post/:id' component={Viewpost} />

    <Route path='/admin/book/:id' component={Book} />
    <Route path='/admin/book/edit/:id' component={Editbook} />
    <Route path='/admin/Addbook' component={Addbook} />
    <Route path='/admin/listBooks' component={ListBooks} /> 

    <Route path='/admin/tran/:id' component={Transition} />
    <Route path='/admin/tran/edit/:id' component={EditTran} />
    <Route path='/admin/AddTran' component={AddTran} />
    <Route path='/admin/listTrans' component={ListTrans} />

  </Route>
  <Route component={App1}>

    <Route path='/' component={HomeDocumentType1} />
    <Route path='/document-type' component={HomeDocumentType1} />
    <Route path='/admin/document-type/:id' component={ViewDocumentType1} />

    <Route path='/admin/category' component={HomeCategory1} />
    <Route path='/admin/category/:id' component={ViewCategory1} />

    <Route path='/admin/user/view' component={Users1} />
    <Route path='/admin/user/:id' component={ViewUser1} />
    <Route path='/admin/post' component={Post1} />
    <Route path='/admin/post/:id' component={Viewpost1} />

  </Route>
  </Route>
);
