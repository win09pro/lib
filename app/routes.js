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


export default (
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

  </Route>
);
