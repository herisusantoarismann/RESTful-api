"use strict";
module.exports = function (app) {
  var Kontak = require("../controllers/KontakController");

  // todoList Routes
  app.route("/kontaks").get(Kontak.index_get).post(Kontak.index_post);

  app.route("/kontak/:id").put(Kontak.index_put).delete(Kontak.index_delete);
};
