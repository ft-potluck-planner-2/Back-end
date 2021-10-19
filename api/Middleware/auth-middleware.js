const Users = require("../scheme/users/users-model");

const checkCredentialsBody = (req, res, next) => {
  const { username, password } = req.body;
  if (
    !username ||
    username.trim() === "" ||
    typeof username !== "string" ||
    !password
  ) {
    return next({ status: 400, message: "username and password required" });
  }
  next();
};

const checkUserNameFree = async (req, res, next) => {
  try {
    const { username } = req.body;
    const existing = await Users.findBy({ username }).first();
    if (existing) {
      res.status(422).json({ status: 422, message: "username taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkUserNameExist = async (req, res, next) => {
  try {
    const { username } = req.body;
    const existing = await Users.findBy({ username }).first();
    if (!existing) {
      res.status(401).json({ message: "invalid credentials" });
    } else {
      req.user = existing;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkCredentialsBody,
  checkUserNameFree,
  checkUserNameExist,
};
