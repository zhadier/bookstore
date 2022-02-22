import { PropTypes } from 'prop-types';

const BookItem = (props) => {
  const { genre, title, author } = props;

  return (
    <li className="book-container">
      <div className="book-header">
        <span className="book-header__category">{genre}</span>
        <h3 className="book-header__title">{title}</h3>
        <p className="book-header__author">{author}</p>
        <div className="book-header__buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book-progress" />
    </li>
  );
};

BookItem.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
