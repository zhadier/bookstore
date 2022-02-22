import Book from './BookItem';

const Booklist = () => {
  const booksData = [
    // added books here just to ilustrate
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'The Da Vinci Code', author: 'Dan Brown' },
    { id: 3, title: 'Pinocchio', author: 'Carlo Collodi' },
  ];
  return booksData.map((item) => (
    <Book genre={item.genre} title={item.title} author={item.author} key={item.id} />
  ));
};

export default Booklist;
