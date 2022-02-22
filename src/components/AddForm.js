import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const categories = [
  'Fantasy',
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
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
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
    if (title.trim().length === 0) {
      setTitle('');
      displayErrorMessage('Please input correct Title');
      return;
    }
    if (category === '') {
      displayErrorMessage('Please select a Category');
      return;
    }
    const newBook = {
      title,
      category,
      id: uuidv4(), // make sure it's unique
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form>
        <input
          className="form-book__title"
          type="text"
          required
          placeholder="Book title"
          value={title}
          onChange={onTitleChange}
          onBlur={onTitleChange}
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
      <p>{errorMsg}</p>
    </div>
  );
};

export default AddForm;
