const Potlucks = require("./potlucks-model");
const router = require("express").Router();
const { checkPotlucksBody } = require("../../middleware");

router.get("/", (req, res, next) => {
  Potlucks.findAll().then((potlucks) => {
    res.status(200).json(potlucks);
  });
});

router.post("/create", checkPotlucksBody, (req, res, next) => {});

module.exports = router;
