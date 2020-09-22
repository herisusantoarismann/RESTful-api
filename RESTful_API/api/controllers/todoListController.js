"use strict";

var mongoose = require("mongoose"),
  Telepon = mongoose.model("Telepon");

exports.index_get = function (req, res) {
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

exports.post = function (req, res) {
  var new_Telepon = new Telepon(req.body);
  new_Telepon.save(function (err, Telepon) {
    if (err) res.send(err);
    res.json(Telepon);
  });
};

exports.index_put = function (req, res) {
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

exports.index_delete = function (req, res) {
  Telepon.remove(
    {
      _id: req.params.id,
    },
    function (err, Telepon) {
      if (err) res.send(err);
      res.json({ message: "Contact successfully deleted" });
    }
  );
};
