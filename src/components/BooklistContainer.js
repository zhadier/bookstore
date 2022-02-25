import Booklist from './Booklist';
import AddForm from './AddForm';
import './BooklistContainer.scss';

const BooklistContainer = () => (
  <section className="booklist-section">
    <Booklist />
    <AddForm />
  </section>
);

export default BooklistContainer;
