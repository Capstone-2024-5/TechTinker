const User = require("../models/users");

//@desc get all users
//@route GET /users
//@access public
exports.getUsers = async (req, res) => {
  //get all users
  const users = await User.find();

  if (!users) {
    return res.json({ status: "error", error: "No users found" });
  }
  res.json({ status: 200, users: users });
};