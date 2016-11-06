import React, {Component} from 'react';

export default class BookList extends Component {
  render() {
    let books = this.props.books.map((book) => {
      return <div key={book.id}>{book.title}</div>
    });
    return (
      <div>
        <h1>{this.props.title}</h1>
        {books}
      </div>
    );
  }
}
