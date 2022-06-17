const books = require('../books');

const getAllBooksHandler = (request, h) => {
  const { name: queryName, reading, finished } = request.query;

  if (queryName) {
    const filteredByName = books
      .filter((book) => book.name.toUpperCase().includes(queryName.toUpperCase()));

    const filteredPropertyBooks = filteredByName.map((book) => {
      const { id, name, publisher } = book;

      return { id, name, publisher };
    });

    return h.response({
      status: 'success',
      data: {
        books: filteredPropertyBooks,
      },
    }).code(200);
  }

  if (reading) {
    let filteredByReading = [];

    if (reading === '1') {
      filteredByReading = books.filter((book) => book.reading === true);
    } else {
      filteredByReading = books.filter((book) => book.reading === false);
    }

    const filteredPropertyBooks = filteredByReading.map((book) => {
      const { id, name, publisher } = book;

      return { id, name, publisher };
    });

    return h.response({
      status: 'success',
      data: {
        books: filteredPropertyBooks,
      },
    }).code(200);
  }

  if (finished) {
    let filteredByFinished = [];

    if (finished === '1') {
      filteredByFinished = books.filter((book) => book.finished === true);
    } else {
      filteredByFinished = books.filter((book) => book.finished === false);
    }

    const filteredPropertyBooks = filteredByFinished.map((book) => {
      const { id, name, publisher } = book;

      return { id, name, publisher };
    });

    return h.response({
      status: 'success',
      data: {
        books: filteredPropertyBooks,
      },
    }).code(200);
  }

  if (books) {
    const filteredPropertyBooks = books.map((book) => {
      const { id, name, publisher } = book;

      return {
        id, name, publisher,
      };
    });

    return {
      status: 'success',
      data: {
        books: filteredPropertyBooks,
      },
    };
  }

  return {
    status: 'success',
    data: {
      books: [],
    },
  };
};

module.exports = getAllBooksHandler;
