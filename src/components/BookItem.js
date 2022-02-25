import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/books/books';

const BookItem = (props) => {
  const {
    category,
    title,
    id,
    author,
    percent,
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookFromAPI(id));
  };

  return (
    <li className="book-container">
      <div className="book-header">
        <span className="book-header__category">{category}</span>
        <h3 className="book-header__title">{title}</h3>
        <p className="book-header__author">{author}</p>
        <div className="book-header__buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={removeBookFromStore}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book-data">
        <div className="book-progress">
          <div className="book-progress__bar">
            <div className="inner" />
            <div className="circle">
              <div className="bar left">
                <div className="progress" />
              </div>

              <div className="bar right">
                <div className="progress" />
              </div>
            </div>
          </div>
          <div className="book-progress__value">
            <h3 className="book-progress__value-percentage">75%</h3>
            <p className="book-progress__value-completed">Completed</p>
          </div>
        </div>
        <div className="book-chapter">
          <span className="book-chapter__title">CURRENT CHAPTER</span>
          <span className="book-chapter__current">
            Chapter-
            {percent + 12}
          </span>
          <button className="book-chapter__update" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default BookItem;
