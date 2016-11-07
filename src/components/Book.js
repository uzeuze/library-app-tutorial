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
