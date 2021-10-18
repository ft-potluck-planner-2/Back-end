const Potlucks = require("./potlucks-model");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  Potlucks.findAll().then((potlucks) => {
    res.status(200).json(potlucks);
  });
});

module.exports = router;
