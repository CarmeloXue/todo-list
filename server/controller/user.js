const User = require("../model/user");

const newUser = {
  name: "carmelo123",
  phone: 123123123
};

const usersApi = {};

usersApi.saveUser = async (name, phone) => {
  await User.create({ name, phone });
};
usersApi.getUsers = async () => {
  const usersAsync = User.find();
  if (usersAsync) return usersAsync;
};

module.exports = usersApi;
