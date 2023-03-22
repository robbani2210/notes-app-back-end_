const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  // Menambahkan Catatan
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  //   Menampilkan Catatan
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  //   Menampilkan Catatan by id
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  //   Mengubah Catatan
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  //   Menghapus Catatan
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
  {
    method: 'GET',
    path: '/coba',
    // eslint-disable-next-line no-unused-vars
    handler: (request, h) => 'Test Connection',
  },
];

module.exports = routes;
