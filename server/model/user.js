let mongoose = require("mongoose");
let User = require("../schema/user");

module.exports = mongoose.model("User", User);
