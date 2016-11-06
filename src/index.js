import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App';
import AllBooks from './components/AllBooks';
import ReadingList from './components/ReadingList';
import FavouriteBooks from './components/FavouriteBooks';
import './styles/index.scss';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/all-books" component={AllBooks} />
      <Route path="/reading-list" component={ReadingList}/>
      <Route path="/favourite-books" component={FavouriteBooks} />
    </Route>
  </Router>
),document.getElementById('root'));
