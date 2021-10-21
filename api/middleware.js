const Users = require("../api/scheme/users/users-model");
const Potlucks = require("../api/scheme/potlucks/potlucks-model");

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
  const { potluck_name, potluck_location, potluck_date, potluck_time } =
    req.body;
  if (
    !potluck_name ||
    potluck_name.trim() === "" ||
    typeof potluck_name !== "string"
  ) {
    return next({ status: 400, message: "potluck name is required" });
  } else if (
    !potluck_location ||
    potluck_location.trim() === "" ||
    typeof potluck_location !== "string"
  ) {
    return next({ status: 400, message: "potluck location is required" });
  } else if (!potluck_date) {
    return next({ status: 400, message: "potluck date is required" });
  } else if (!potluck_time) {
    return next({ status: 400, message: "potluck time is required" });
  } else {
    next();
  }
};

const checkFoodsBody = (req, res, next) => {
  const { food_name } = req.body;
  if (!food_name || food_name.trim() === "" || typeof food_name !== "string") {
    return next({ status: 400, message: "please enter a valid food item" });
  }
  next();
};

const checkPotluckExist = async (req, res, next) => {
  try {
    const { potluck_id } = req.params;
    const existing = await Potlucks.findByPotluckId(potluck_id);

    if (existing.length === 0) {
      res.status(400).json({ message: "potluck does not exist" });
    } else {
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
  checkPotlucksBody,
  checkFoodsBody,
  checkPotluckExist,
};
