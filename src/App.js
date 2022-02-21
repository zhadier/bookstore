import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Booklist from './components/Booklist';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Booklist />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
