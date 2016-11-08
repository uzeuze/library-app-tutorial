#Build Basic Library App with React Router, Webpack & Sass

[See live demo on Codepen](http://codepen.io/uzeuze/full/xRbmWw/)

This tutorial will guide you through a library app. Hopefully by the end of this tutorial, you will be familiar with:

* How to use Sass CSS processor with Webpack.
* Handle routing with React Router.

#### Reading Material

* [React Router Github page](https://github.com/ReactTraining/react-router)
* [Sass loader for Webpack](https://github.com/jtangelder/sass-loader)

##Create a new App

Create a new project folder:

`mkdir library_app`

To create a package.json file with defaults, run the following command on the terminal:

`npm init -y`

Install project dependencies locally with:

`npm install --save react react-dom react-router react-bootstrap`

Install dev dependencies locally with:

`npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server sass-loader css-loader style-loader node-sass`

Create public folder.
Add index.html to public folder. Add Bootstrap CDN to include Bootstrap's CSS styles.
The index.html will contain a pretty basic HTML page, whose only purpose is to load the bundled JavaScript file:

```
<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
   <title>Library App</title>
 </head>
 <body>
   <div id="root"></div>
   <script type="text/javascript" src="/bundle.js"></script>
 </body>
</html>
```

Create src folder.
Create index.js file in src folder.

```javascript
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
```

Create components folder.

####App Component

src/components/App.js

```
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
```

####BookListContainer Component

src/components/BookListContainer.js

```
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
```

####BookList Component

src/components/BookList.js

```
import React, {Component} from 'react';
import Book from './Book';
import {Grid, Row} from 'react-bootstrap';

export default class BookList extends Component {
  render() {
    let books = this.props.books.map((book) => {
      return (
              <Book
                key={book.id}
                book={book}
                onToReadClick={this.props.onToReadClick.bind(null,book.id)}
                onFavouriteClick={this.props.onFavouriteClick.bind(null,book.id)}
              />
            );
    });
    return (
      <div>
        <Grid>
          <Row>
            {
              books.length > 0
                ? books
                :
                <h3 className="text-center text-gray">You don't have any book in that list.</h3>
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

```

####Book Component

src/components/Book.js

```
import React, {Component} from 'react';
import {Col, Glyphicon, Tooltip, OverlayTrigger} from 'react-bootstrap';
import '../styles/Book.scss';

export default class Book extends Component {
  render() {
    const tooltipRead = (
      <Tooltip id="tooltip-read">Add/Remove book from reading list.</Tooltip>
    );
    const tooltipFavourite = (
      <Tooltip id="tooltip-favourite">Add/Remove book from favourites.</Tooltip>
    );
    return (
      <Col className="Book" sm={6} md={3}>
        <div className="Book__content">
          <img className="Book__cover" src={this.props.book.cover} />
          <OverlayTrigger placement="bottom" overlay={tooltipRead}>
            <a
              className={
                this.props.book.toRead
                ? "Book__button Book__button--read Book__button--active"
                : "Book__button Book__button--read"
              }
              onClick={this.props.onToReadClick}
            >
              <Glyphicon className="Book__icon" glyph="plus" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={tooltipFavourite}>
            <a
              className={
                this.props.book.isFavourite
                ? "Book__button Book__button--favourite Book__button--active"
                : "Book__button Book__button--favourite"
              }
              onClick={this.props.onFavouriteClick}
            >
              <Glyphicon className="Book__icon" glyph="star" />
            </a>
          </OverlayTrigger>
        </div>
        <h4 className="text-center text-gray">{this.props.book.title}</h4>
      </Col>
    );
  }
}

```

##Add Styles
Create stles folder in src directory.

src/styles/index.scss

```
$main-color: #F0F4C3;

body {
  background-color: $main-color;
  color: #FFF;
}

.text-gray {
  color: #424242;
}
```  

src/styles/App.scss

```
.App__title {
  color: #ff3466;
}

.App__navbar {
  width: 360px;
  border: none;
  margin: 0 auto 20px auto;

  .nav__link:hover,
  .nav__link:active,
  .nav__link:focus {
    background-color: #383B76;
    color: #fff;
    border-bottom: 0;
  }

  .nav__link--active {
    background-color: #383B76;
    color: #fff;
    border-bottom: 4px solid #ff3466 !important;
  }
}



@media (max-width: 410px) {
  .App__navbar {
    width: 140px;
    .nav__item {
      width: 140px;
      margin-bottom: 10px;
    }
    .nav__link {
      text-align: center;
    }
  }
}
```  

src/styles/Book.scss

```
.Book {
  height: 400px;
}

.Book__content {
  height: 300px;
  width: 200px;
  position: relative;
  margin: 0 auto;
}

.Book__cover {
  height: 300px;
  width: 200px;
}

.Book__button {
  position: absolute;
  bottom: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
}

.Book__button--favourite {
  right: 50px;
  background-color: #F26F54;
}

.Book__button--read {
  right: 5px;
  background-color: #3FB98C;
}
.Book__icon {
  font-size: 30px;
  color: #f1f1f1;
  height: 100%;
  width: 100%;
}

.Book__icon::before {
  position: relative;
  top: 2px;
  left: 1px;
}

.Book__button--active .Book__icon{
  color: #383B76;
}

.tooltip.bottom .tooltip-inner {
    background-color: #ff3466;
    font-size: 14px;
  }
```  

##Webpack Configuration
```
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
```

Add start script to package.json file.
```
"scripts": {
  "start": "node_modules/.bin/webpack-dev-server --progress"
},
```

Add .gitignore file:
```
node_modules
.DS_Store
npm-debug.log
```

Run `npm start` and visit http://localhost:8080/
