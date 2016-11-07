import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center app-title">Library App</h1>
        <ul id="nav-library" className="nav nav-tabs">
          <li><Link to="/" activeClassName="tab-active" onlyActiveOnIndex={true}>All Books</Link></li>
          <li><Link to="/reading-list" activeClassName="tab-active">Reading List</Link></li>
          <li><Link to="/favourite-books" activeClassName="tab-active">Favourite Books</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
