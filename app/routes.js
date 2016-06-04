import React from 'react';
import {Route} from 'react-router';
import App from './components/admin/App';
import Adminlogin from './components/admin/login/Adminlogin';

import HomeDocumentType from './components/admin/documenttype/HomeDocumentType';
import ViewDocumentType from './components/admin/documenttype/ViewDocumentType';

import HomeCategory from './components/admin/category/HomeCategory';
import ViewCategory from './components/admin/category/ViewCategory';

import Users from './components/admin/usermanage/user';
import ViewUser from './components/admin/usermanage/viewuser';
import Post from './components/admin/post/Post';
import PostCate from './components/admin/post/PostCate';
import Viewpost from './components/admin/post/Viewpost';

import HomeBook from './components/admin/book/HomeBook';
import ViewBook from './components/admin/book/ViewBook';

import HomeTransition from './components/admin/transition/HomeTransition';
import AddTran from './components/transition/AddTran';
import ListTrans from './components/transition/ListTrans';
import EditTran from './components/transition/EditTran';
import Transition from './components/transition/Transition';

import Appmain from './components/main/App';
import Main from './components/main/Main';
import Viewdetailpost from './components/main/Post/Viewdetailpost';
import Listallpost from './components/main/Post/Listallpost';

import ViewDetailBook from './components/main/book/ViewDetailBook';
import ListAllBook from './components/main/book/ListAllBook';
import ListBookCate from './components/main/book/ListBookCate';

import Userprofille from './components/main/User/Userprofille';
import Editprofile from './components/main/User/Editprofile';
import EditPassword from './components/main/User/EditPassword';
//import Login from './components/main/Login/Login';
export default (
  <Route>
  <Route path='/admin/login' component ={Adminlogin}/>
  <Route component={App}>    
    <Route path='/admin' component={HomeDocumentType} />
    <Route path='/admin/document-type' component={HomeDocumentType} />
    <Route path='/admin/document-type/:id' component={ViewDocumentType} />

    <Route path='/admin/category' component={HomeCategory} />
    <Route path='/admin/category/:id' component={ViewCategory} />

    <Route path='/admin/user/view' component={Users} />
    <Route path='/admin/user/:id' component={ViewUser} />
    <Route path='/admin/post' component={Post} />
    <Route path='/admin/PostCate' component={PostCate} />
    <Route path='/admin/post/:id' component={Viewpost} />
    <Route path='/admin/PostCate' component ={PostCate}/>


    <Route path='/admin/book' component={HomeBook} />
    <Route path='/admin/book/:id' component={ViewBook} />

    <Route path='/admin/tran/:id' component={HomeTransition} />
    <Route path='/admin/tran/edit/:id' component={EditTran} />
    <Route path='/admin/AddTran' component={AddTran} />
    <Route path='/admin/tran' component={HomeTransition} />

  </Route>
  <Route component={Appmain}> 
    <Route path='/' component={Main}/> 
    <Route path='/danh-muc/:name' component={ListBookCate}/>
    <Route path='/allbook' component = {ListAllBook} />
    <Route path='/chi-tiet-sach/:id' component = {ViewDetailBook}/> 
    <Route path='/tin-tuc/:namelink' component ={Listallpost}/>   
    <Route path='/user/profile' component ={Userprofille}/>  
    <Route path='/user/profile/edit' component ={Editprofile}/>   
    <Route path='/user/profile/editpassword' component ={EditPassword}/>           
    <Route path=':link' component={Viewdetailpost}/> 
  </Route>
  </Route>
);
