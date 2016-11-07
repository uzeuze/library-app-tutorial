import React, {Component} from 'react';
import {Col, Glyphicon, Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class Book extends Component {
  render() {
    const tooltipRead = (
      <Tooltip id="tooltip-read">Add/Remove book from reading list.</Tooltip>
    );
    const tooltipFavourite = (
      <Tooltip id="tooltip-favourite">Add/Remove book from favourites.</Tooltip>
    );
    return (
      <Col className="book-item" sm={6} md={3}>
        <div className="cover-container">
          <img className="book-cover" src={this.props.book.cover} />
          <OverlayTrigger placement="bottom" overlay={tooltipRead}>
            <a className={this.props.book.toRead ? "btn-read btn-read-active" : "btn-read"} onClick={this.props.onToReadClick}>
              <Glyphicon className="book-icon" glyph="plus" />
            </a>
          </OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={tooltipFavourite}>
            <a className={this.props.book.isFavourite ? "btn-favourite btn-favourite-active" : "btn-favourite"} onClick={this.props.onFavouriteClick}>
              <Glyphicon className="book-icon" glyph="star" />
            </a>
          </OverlayTrigger>
        </div>
        <h4 className="text-center book-title">{this.props.book.title}</h4>
      </Col>
    );
  }
}
