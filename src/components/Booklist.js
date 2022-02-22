import { useSelector } from 'react-redux';
import Book from './BookItem';
import { saveState } from '../logic/localStorage';

const Booklist = () => {
  const bookList = useSelector((state) => state.booksReducer);
  saveState(bookList);
  return (
    <ul>
      {bookList.map((item) => (
        <Book category={item.category} title={item.title} key={item.id} id={item.id} />
      ))}
    </ul>
  );
};

export default Booklist;
