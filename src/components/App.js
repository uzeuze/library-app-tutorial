import React, {Component} from 'react';
import {Link} from 'react-router';
import '../styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center App__title">Library App</h1>
        <ul className="nav nav-tabs App__navbar">
          <li className="nav__item"><Link to="/" className="nav__link" activeClassName="nav__link--active" onlyActiveOnIndex={true}>All Books</Link></li>
          <li className="nav__item"><Link to="/reading-list" className="nav__link" activeClassName="nav__link--active">Reading List</Link></li>
          <li className="nav__item"><Link to="/favourite-books" className="nav__link" activeClassName="nav__link--active">Favourite Books</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
