const Book = () => (
  <li className="book-container">
    <div className="book-header">
      <span className="book-header__category">Action</span>
      <h3 className="book-header__title">Hunger Games</h3>
      <p className="book-header__author">Nora Roberts</p>
      <div className="book-header__buttons">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>

    <div className="book-progress" />
  </li>
);

export default Book;
