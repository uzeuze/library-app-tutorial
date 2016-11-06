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
  constructor() {
      super();
      this.state = {
        books: books
      }
  }
  handleToReadClick(book_id) {
    let newBooks = this.state.books.slice();
    for(let i=0; i<newBooks.length; i++){
      if(newBooks[i].id === book_id) {
        newBooks[i].toRead = !newBooks[i].toRead;
      }
    }
    this.setState({books: newBooks});
  }

  handleFavouriteClick(book_id) {
    let newBooks = this.state.books.slice();
    for(let i=0; i<newBooks.length; i++){
      if(newBooks[i].id === book_id) {
        newBooks[i].isFavourite = !newBooks[i].isFavourite;
      }
    }
    this.setState({books: newBooks});
  }

  render() {
    let pathName = this.props.location.pathname;
    let bookData = this.state.books.slice();
    let bookList,
        title;
    switch (pathName) {
      case '/reading-list':
        bookList = bookData.filter((book) => {
          return book.toRead;
        });
        title = "ReadingList";
        break;
        case '/favourite-books':
          bookList = bookData.filter((book) => {
            return book.isFavourite;
          });
          title = "FavouriteBooks";
          break;
      default:
          bookList = books.slice();
          title = "All Books";
    }
    return (
      <BookList books={bookList}
                title={title}
                onToReadClick={this.handleToReadClick.bind(this)}
                onFavouriteClick={this.handleFavouriteClick.bind(this)}/>
    );
  }
}
