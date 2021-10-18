const Potlucks = require("./potlucks-model");
const router = require("express").Router();
const { checkPotlucksBody } = require("../../middleware");

router.get("/:user_id/potlucks", (req, res, next) => {
  Potlucks.findById(req.params.user_id).then((potlucks) => {
    res.status(200).json(potlucks);
  });
});

router.post("/create", checkPotlucksBody, (req, res, next) => {});

module.exports = router;
