const books = require('../books');

const updateBookHandler = (request, h) => {
  const { bookId } = request.params;
  const requestBody = request.payload;
  const updatedAt = new Date().toISOString();
  const index = books.findIndex((book) => book.id === bookId);

  if (!('name' in requestBody)) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    }).code(400);
  }

  if (requestBody.readPage > requestBody.pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  if (index !== -1) {
    books[index] = {
      ...books[index],
      ...requestBody,
      updatedAt,
    };

    return h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    }).code(200);
  }

  return h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  }).code(404);
};

module.exports = updateBookHandler;
