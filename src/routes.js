const addBookHandler = require('./controller/addBookHandler');
const getAllBooksHandler = require('./controller/getAllBooksHandler');

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
];

module.exports = routes;
