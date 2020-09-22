"use strict";
module.exports = function (app) {
  var todoList = require("../controllers/todoListController");

  // todoList Routes
  app.route("/tasks").get(todoList.list).post(todoList.create);

  app.route("/tasks/:id").put(todoList.update).delete(todoList.delete);
};
