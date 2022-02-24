// constants
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appID = 'u8RwreAHY4TXncmbc51R';

// initial state
const initialState = [];

// action creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// thunk action functions

export const addBookToAPI = (newBook) => async (dispatch) => {
  dispatch(addBook(newBook));
  await fetch(`${baseURL}/apps/${appID}/books`, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: { 'Content-type': 'application/JSON' },
  });
};

export const getBooksFromAPI = () => async (dispatch) => {
  await fetch(`${baseURL}/apps/${appID}/books`)
    .then((response) => response.json())
    .then((bookList) => {
      const arrangedList = Object.entries(bookList).map(([key, value]) => ({
        item_id: key,
        title: value[0].title,
        category: value[0].category,
      }));
      if (arrangedList) {
        dispatch(addBook(arrangedList));
      }
    });
};

export const removeBookFromAPI = (itemId) => async (dispatch) => {
  dispatch(removeBook(itemId));
  await fetch(`${baseURL}/apps/${appID}/books/${itemId}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: itemId }),
    headers: { 'Content-type': 'application/JSON' },
  });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
