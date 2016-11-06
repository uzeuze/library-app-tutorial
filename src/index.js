import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App';
import BookListContainer from './components/BookListContainer';
import './styles/index.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BookListContainer}/>
      <Route path="/reading-list" component={BookListContainer}/>
      <Route path="/favourite-books" component={BookListContainer} />
    </Route>
  </Router>
),document.getElementById('root'));
