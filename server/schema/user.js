let Schema = require("mongoose").Schema;

let userSchema = new Schema({
  name: String,
  phone: Number
});

module.exports = userSchema;
