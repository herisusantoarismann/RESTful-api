"use strict";
module.exports = function (app) {
  var todoList = require("../controllers/todoListController");

  // todoList Routes
  app.route("/kontaks").get(todoList.list).post(todoList.create);

  app.route("/kontak/:id").put(todoList.update).delete(todoList.delete);
};
