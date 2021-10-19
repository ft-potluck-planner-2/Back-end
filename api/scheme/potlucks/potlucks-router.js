const Potlucks = require("./potlucks-model");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  Potlucks.findAll().then((potlucks) => {
    res.status(200).json(potlucks);
  });
});

router.post("/newPotluck", async (req, res, next) => {
  const { name, location, date, time } = req.body;
  try {
    const newLuck = { name, location, date, time };
    const luck = await Potlucks.insertPotLuck(newLuck);
    res.status(201).json(luck);
  } catch (err) {
    next(err);
  }
});

router.put("/newItem/update"), async (req, res, next) => {
  const { name, location, date, time } = req.body;
  try {
    const newLuck = { name, location, date, time };

    const luck = await Potlucks.insertPotLuck(newLuck);
    res.status(201).json(luck);
  } catch (err) {
    next(err);
  }
}

module.exports = router;
