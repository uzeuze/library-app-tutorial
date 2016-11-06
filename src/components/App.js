import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Library App</h1>
        <ul role="nav">
          <li><Link to="/" activeStyle={{ color: 'red' }} onlyActiveOnIndex={true}>All Books</Link></li>
          <li><Link to="/reading-list" activeStyle={{ color: 'red' }}>Reading List</Link></li>
          <li><Link to="/favourite-books" activeStyle={{ color: 'red' }}>Favourite Books</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
