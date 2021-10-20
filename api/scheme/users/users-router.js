const Users = require("./users-model");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../secrets");
const {
  checkCredentialsBody,
  checkUserNameFree,
  checkUserNameExist,
} = require("../../middleware");

router.get("/", (req, res, next) => {
  Users.findAll().then((users) => {
    res.status(200).json(users);
  });
});

router.post(
  "/register",
  checkCredentialsBody,
  checkUserNameFree,
  (req, res, next) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.addUser(user)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch(next);
  }
);

router.post(
  "/login",
  checkCredentialsBody,
  checkUserNameExist,
  (req, res, next) => {
    const { password } = req.body;
    if (bcrypt.compareSync(password, req.user.password)) {
      const token = generateToken(req.user);
      res.status(200).json({
        user_id: req.user.user_id,
        token,
      });
    } else {
      next({ status: 401, message: "invalid credentials" });
    }
  }
);

function generateToken(user) {
  const payload = {
    user_id: user.user_id,
    username: user.username,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = router;
