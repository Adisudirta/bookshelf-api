const addBookHandler = require('./controller/addBookHandler');
const getAllBooksHandler = require('./controller/getAllBooksHandler');
const getDetailBooksHandler = require('./controller/getDetailBooksHandler');
const updateBookHandler = require('./controller/updateBookHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBooksHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler,
  },
];

module.exports = routes;
