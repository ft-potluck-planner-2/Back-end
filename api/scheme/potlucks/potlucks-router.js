const Potlucks = require("./potlucks-model");
const router = require("express").Router();
const { checkPotlucksBody, checkPotluckExist } = require("../../middleware");

router.get("/", (req, res, next) => {
  Potlucks.findAll()
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch(next);
});

router.get("/:user_id/potlucks", (req, res, next) => {
  Potlucks.findById(req.params.user_id)
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch(next);
});

router.get("/:user_id/potlucks/:potluck_id", (req, res, next) => {
  const { user_id, potluck_id } = req.params;
  Potlucks.findOnePotluckById(user_id, potluck_id)
    .then((potlucks) => {
      res.status(200).json(potlucks);
    })
    .catch(next);
});

router.post(
  "/:user_id/newPotluck",
  checkPotlucksBody,
  async (req, res, next) => {
    const { user_id } = req.params;
    try {
      const newPotluck = await Potlucks.addPotluck({
        ...req.body,
        user_id,
      });
      res.status(201).json(newPotluck);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:user_id/updatePotluck/:potluck_id",
  checkPotlucksBody,
  checkPotluckExist,
  async (req, res, next) => {
    const { potluck_id } = req.params;
    try {
      const updatedPotluck = await Potlucks.updatePotluck(potluck_id, req.body);
      res.status(200).json(updatedPotluck);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
