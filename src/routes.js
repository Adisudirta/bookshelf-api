const addBookHandler = require('./controller/addBookHandler');
const getAllBooksHandler = require('./controller/getAllBooksHandler');
const getDetailBooksHandler = require('./controller/getDetailBooksHandler');

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
];

module.exports = routes;
