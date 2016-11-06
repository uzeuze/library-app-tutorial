import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Bookstore App</h1>
        <ul role="nav">
          <li><Link to="/">All Books</Link></li>
          <li><Link to="/reading-list">Reading List</Link></li>
          <li><Link to="/favourite-books">Favourite Books</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
