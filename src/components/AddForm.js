const AddForm = () => (
  <div className="form-container">
    <h2 className="form-title">ADD NEW BOOK</h2>
    <form>
      <input className="form-book__title" type="text" required placeholder="Book title" />
      <div className="form-book__category">
        <select className="select-input" default name="category">
          <option value="" disabled>
            Category
          </option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
          <option value="Contemporary">Contemporary</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Paranormal">Paranormal</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Comedy">Comedy</option>
        </select>
      </div>
      <button className="add-btn" type="submit">
        ADD BOOK
      </button>
    </form>
  </div>
);

export default AddForm;
