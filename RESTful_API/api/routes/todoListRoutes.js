"use strict";
module.exports = function (app) {
  var todoList = require("../controllers/todoListController");

  // todoList Routes
  app.route("/kontaks").get(todoList.index_get).post(todoList.index_post);

  app
    .route("/kontak/:id")
    .put(todoList.index_put)
    .delete(todoList.index_delete);
};
