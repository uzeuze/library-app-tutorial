import React, {Component} from 'react';
import BookList from './BookList';

let books = [
  {
    id: 1,
    title: "Robinson Crusoe",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/SFEC_HULL_CRUSOE1.JPG/640px-SFEC_HULL_CRUSOE1.JPG?1478446004459",
    isFavourite: false,
    toRead: false
  },
  {
    id: 2,
    title: "Gulliver's Travels",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/James_Gillray_The_King_of_Brobdingnag_and_Gulliver.%E2%80%93Vide._Swift%27s_Gulliver-_Voyage_to_Brobdingnag_The_Metropolitan_Museum_of_Art_edit.jpg/640px-James_Gillray_The_King_of_Brobdingnag_and_Gulliver.%E2%80%93Vide._Swift%27s_Gulliver-_Voyage_to_Brobdingnag_The_Metropolitan_Museum_of_Art_edit.jpg?1478446064113",
    isFavourite: false,
    toRead: false
  },
  {
    id: 3,
    title: "Ulysses",
    cover: "https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg?1478446157909",
    isFavourite: false,
    toRead: false
  },
  {
    id: 4,
    title: "The Great Gatsby",
    cover: "https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg?1478446224406",
    isFavourite: false,
    toRead: false
  },
  {
    id: 5,
    title: "The Grapes of Wrath",
    cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/JohnSteinbeck_TheGrapesOfWrath.jpg?1478446320367",
    isFavourite: false,
    toRead: false
  },
  {
    id: 6,
    title: "Nineteen Eighty-Four",
    cover: "https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg?1478446378416",
    isFavourite: false,
    toRead: false
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    cover: "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg?1478446438099",
    isFavourite: false,
    toRead: false
  },
  {
    id: 8,
    title: "Lord of the Flies",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg?1478446475598",
    isFavourite: false,
    toRead: false
  },
  {
    id: 9,
    title: "Catch-22",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/99/Catch22.jpg?1478446564001",
    isFavourite: false,
    toRead: false
  },
  {
    id: 10,
    title: "A Clockwork Orange",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/23/Clockwork_orange.jpg?1478446614883",
    isFavourite: false,
    toRead: false
  },
  {
    id: 11,
    title: "The Stranger",
    cover: "https://upload.wikimedia.org/wikipedia/en/f/f7/L%E2%80%99%C3%89tranger_%28Camus_novel%29.jpg?1478446839229",
    isFavourite: false,
    toRead: false
  },
  {
    id: 12,
    title: "The Trial",
    cover: "https://upload.wikimedia.org/wikipedia/en/f/f9/TrialKafka.jpg?1478446904739",
    isFavourite: false,
    toRead: false
  },
  {
    id: 13,
    title: "The Little Prince",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG?1478446949784",
    isFavourite: false,
    toRead: false
  },
  {
    id: 14,
    title: "Darkness at Noon",
    cover: "https://upload.wikimedia.org/wikipedia/commons/7/78/DarknessAtNoon.jpg?1478447162670",
    isFavourite: false,
    toRead: false
  },
  {
    id: 15,
    title: "Crime and Punishment",
    cover: "https://upload.wikimedia.org/wikipedia/en/4/4b/Crimeandpunishmentcover.png?1478447271046",
    isFavourite: false,
    toRead: false
  },
  {
    id: 16,
    title: "Great Expectations",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Greatexpectations_vol1.jpg/640px-Greatexpectations_vol1.jpg?1478447417564",
    isFavourite: false,
    toRead: false
  },
  {
    id: 17,
    title: "The Idiot",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/04/The_Idiot_%28book_cover%29.jpg?1478447491624",
    isFavourite: false,
    toRead: false
  },
  {
    id: 18,
    title: "Siddhartha",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Vorzugsausgabe_der_Erstauflage_von_1922%2C_Originalverlagseinband.JPG/640px-Vorzugsausgabe_der_Erstauflage_von_1922%2C_Originalverlagseinband.JPG?1478447605012",
    isFavourite: false,
    toRead: false
  },
  {
    id: 19,
    title: "The Hitchhiker's Guide to the Galaxy",
    cover: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg?1478447796293",
    isFavourite: false,
    toRead: false
  },
  {
    id: 20,
    title: "Oblomov",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oblomov_1915.jpg/640px-Oblomov_1915.jpg?1478447854924",
    isFavourite: false,
    toRead: false
  }
];

export default class BookListContainer extends Component {
  constructor() {
      super();
      this.state = {
        books: []
      }
      this.handleToReadClick = this.handleToReadClick.bind(this);
      this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
  }

  componentDidMount() {
      this.setState({books: books.slice()});
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
                onToReadClick={this.handleToReadClick}
                onFavouriteClick={this.handleFavouriteClick}/>
    );
  }
}
