const addBookHandler = require('./controller/addBookHandler');
const getAllBooksHandler = require('./controller/getAllBooksHandler');
const getDetailBooksHandler = require('./controller/getDetailBooksHandler');
const updateBookHandler = require('./controller/updateBookHandler');
const deleteBookHandler = require('./controller/deleteBookHandler');

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
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
