const books = require('../books');

const getAllBooksHandler = () => {
  if (books) {
    const filteredInformationBooks = books.map((book) => {
      const { id, name, publisher } = book;

      return {
        id, name, publisher,
      };
    });

    return {
      status: 'success',
      data: {
        books: filteredInformationBooks,
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
