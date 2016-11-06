import React, {Component} from 'react';

export default class Book extends Component {
  render() {
    return (
      <div>
        <h6>{this.props.book.title}</h6>
        <button onClick={this.props.onToReadClick}>Toggle Read List</button>
        <button onClick={this.props.onFavouriteClick}>Toggle Favourite</button>
      </div>
    );
  }
}
