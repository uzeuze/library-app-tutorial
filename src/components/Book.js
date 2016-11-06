import React, {Component} from 'react';

export default class Book extends Component {
  render() {
    return (
      <div>
        <h6>{this.props.book.title}</h6>
        <button className={this.props.book.toRead ? "btn-read" : ""} onClick={this.props.onToReadClick}>Toggle Read List</button>
        <button className={this.props.book.isFavourite ? "btn-favourite" : ""} onClick={this.props.onFavouriteClick}>Toggle Favourite</button>
      </div>
    );
  }
}
