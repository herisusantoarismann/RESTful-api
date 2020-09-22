"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TeleponSchema = new Schema({
  nama: {
    type: String,
    required: "Kindly enter the name",
  },
  nomor: {
    type: Number,
    required: "Kindly enter the number",
  },
});

module.exports = mongoose.model("Telepon", TeleponSchema);
