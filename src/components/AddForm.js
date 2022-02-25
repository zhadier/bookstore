import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBookToAPI } from '../redux/books/books';

const categories = [
  'Fantasy',
  'Drama',
  'Adventure',
  'Romance',
  'Action',
  'History',
  'Horrror',
  'Thriller',
  'Science-Fiction',
  'Comedy',
];

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const displayErrorMessage = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg('');
    }, 2000);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || author.trim().length === 0) {
      setTitle('');
      displayErrorMessage('Please remove whitespace in Title and Author');
      return;
    }
    if (category === '') {
      displayErrorMessage('Please select a Category');
      return;
    }
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(addBookToAPI(newBook));
    setTitle('');
    setCategory('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form>
        <input
          className="form-book__title"
          type="text"
          required
          placeholder="Book Title"
          value={title}
          onChange={onTitleChange}
          onBlur={onTitleChange}
        />
        <input
          className="form-book__author"
          type="text"
          required
          placeholder="Book Author"
          value={author}
          onChange={onAuthorChange}
          onBlur={onAuthorChange}
        />
        <div className="form-book__category">
          <select
            className="form-book__select"
            default
            name="category"
            value={category}
            onChange={onCategoryChange}
            onBlur={onCategoryChange}
          >
            <option value="" disabled>
              Category
            </option>
            {categories.sort().map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button className="form-book__add" type="button" onClick={submitBookToStore}>
          ADD BOOK
        </button>
      </form>
      <p className="error">{errorMsg}</p>
    </div>
  );
};

export default AddForm;
