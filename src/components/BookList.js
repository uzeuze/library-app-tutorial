import React, {Component} from 'react';
import Book from './Book';

export default class BookList extends Component {
  render() {
    let books = this.props.books.map((book) => {
      return <Book key={book.id} book={book} onToReadClick={this.props.onToReadClick.bind(null,book.id)} onFavouriteClick={this.props.onFavouriteClick.bind(null,book.id)}/>
    });
    return (
      <div>
        <h1>{this.props.title}</h1>
        {books}
      </div>
    );
  }
}
