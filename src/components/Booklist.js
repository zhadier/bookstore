import { useSelector } from 'react-redux';
import Book from './BookItem';

const Booklist = () => {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {bookList.map((item) => (
        <Book
          category={item.category}
          title={item.title}
          key={item.item_id}
          id={item.item_id}
          author={item.author}
          percent={Math.floor(Math.random() * 100) + 1}
        />
      ))}
    </ul>
  );
};

export default Booklist;
