import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App';
import BookList from './components/BookList';
import './styles/index.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BookList}/>
      <Route path="/reading-list" component={BookList}/>
      <Route path="/favourite-books" component={BookList} />
    </Route>
  </Router>
),document.getElementById('root'));
