const Users = require("../api/scheme/users/users-model");

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

const checkPotlucksBody = (req, res, next) => {
  const { name, location, date, time } = req.body;
  if (!name || name.trim() === "" || typeof name !== "string") {
    return next({ status: 400, message: "potluck name is required" });
  } else if (
    !location ||
    location.trim() === "" ||
    typeof location !== "string"
  ) {
    return next({ status: 400, message: "potluck location is required" });
  } else if (!date) {
    return next({ status: 400, message: "potluck date is required" });
  } else if (!time) {
    return next({ status: 400, message: "potluck time is required" });
  } else {
    next();
  }
};

module.exports = {
  checkCredentialsBody,
  checkUserNameFree,
  checkUserNameExist,
  checkPotlucksBody,
};
