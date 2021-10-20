const Foods = require("./foods-model");
const router = require("express").Router();

router.get("/:potluck_id/foods", (req, res, next) => {
  Foods.findFoodsByPotluckId(req.params.potluck_id)
    .then((foods) => {
      res.status(200).json(foods);
    })
    .catch(next);
});

router.post("/:potluck_id/addFoods", (req, res, next) => {
  const { potluck_id } = req.params;
  const { food_name } = req.body;
  Foods.addFood(food_name, potluck_id)
    .then(() => {
      res.status(202).json({
        message: `successfully added ${req.body.food_name} to the potluck`,
      });
    })
    .catch(next);
});

module.exports = router;
