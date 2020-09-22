"use strict";

var mongoose = require("mongoose"),
  Telepon = mongoose.model("Telepon");

exports.list = function (req, res) {
  var nama = req.query.nama;
  if (nama === undefined) {
    Telepon.find({}, function (err, Telepon) {
      if (err) res.send(err);
      res.json(Telepon);
    });
  } else {
    Telepon.find({ nama: nama }, function (err, Telepon) {
      if (err) res.send(err);
      res.json(Telepon);
    });
  }
};

exports.create = function (req, res) {
  var new_task = new Telepon(req.body);
  new_task.save(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update = function (req, res) {
  Telepon.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, Telepon) {
      if (err) res.send(err);
      res.json(Telepon);
    }
  );
};

exports.delete = function (req, res) {
  Telepon.remove(
    {
      _id: req.params.id,
    },
    function (err, Telepon) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  );
};
