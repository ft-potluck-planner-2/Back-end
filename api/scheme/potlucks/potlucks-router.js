const Potlucks = require("./potlucks-model");
const router = require("express").Router();

router.get("/", (req, res) => {
  Potlucks.findAll().then((potlucks) => {
    res.status(200).json(potlucks);
  });
});

// on login, user is returned a token and user_id
// the user_id needs to be pulled into post request
router.post("/:user_id/newPotluck", async (req, res, next) => {
  const { user_id } = req.params;
  try {
    const newPotluck = await Potlucks.insertPotluck({
      ...req.body,
      user_id,
    });
    res.status(201).json(newPotluck);
  } catch (err) {
    next(err);
  }
});

router.put("/:user_id/updatePotluck/:potluck_id"),
  async (req, res, next) => {
    const changes = req.body;
    const { potluck_id } = req.params;
    try {
      const updatedPotluck = await Potlucks.updatePotluck(changes, potluck_id);
      res.status(201).json(updatedPotluck);
    } catch (err) {
      next(err);
    }
  };

module.exports = router;
