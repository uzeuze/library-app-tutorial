import React, {Component} from 'react';
import BookList from './BookList';
let books = [
  {
    id: 1,
    title: "Book 1",
    isFavourite: false,
    toRead: false
  },
  {
    id: 2,
    title: "Book 2",
    isFavourite: false,
    toRead: false
  },
  {
    id: 3,
    title: "Book 3",
    isFavourite: true,
    toRead: false
  },
  {
    id: 4,
    title: "Book 4",
    isFavourite: false,
    toRead: true
  }
];

export default class BookListContainer extends Component {
  render() {
    let pathName = this.props.location.pathname;
    let bookList,
        title;
    switch (pathName) {
      case '/reading-list':
        bookList = books.filter((book) => {
          return book.toRead;
        });
        title = "ReadingList";
        break;
        case '/favourite-books':
          bookList = books.filter((book) => {
            return book.isFavourite;
          });
          title = "FavouriteBooks";
          break;
      default:
          bookList = books.slice();
          title = "All Books";
    }
    return (
      <BookList books={bookList} title={title}/>
    );
  }
}
