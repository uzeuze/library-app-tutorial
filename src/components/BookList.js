import React, {Component} from 'react';

export default class BookList extends Component {
  render() {
    let pathName = this.props.location.pathname;
    return (
      <div>{pathName}</div>
    );
  }
}
