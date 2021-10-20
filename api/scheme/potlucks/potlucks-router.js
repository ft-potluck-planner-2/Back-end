const Potlucks = require("./potlucks-model");
const router = require("express").Router();
const { checkPotlucksBody } = require("../../middleware");

router.get("/:user_id/potlucks", (req, res, next) => {
  Potlucks.findById(req.params.user_id).then((potlucks) => {
    res.status(200).json(potlucks);
  });
});

router.post("/:user_id/create", checkPotlucksBody, async (req, res, next) => {
  const { user_id } = req.params;
  const newPotluck = await Potlucks.addPotluck({
    ...req.body,
    user_id,
  });
  res.status(201).json(newPotluck);
});

// router.put("/:user_id/update/:potluck_id", (req, res, next) => {});

module.exports = router;
