const db = require("../../data/db-config");

const findFoodsByPotluckId = (potluck_id) => {
  return db("foods_table").where("potluck_id", potluck_id);
};

const addFood = async (food_name, potluck_id) => {
  const newFood = await db("foods_table").insert({ food_name, potluck_id }, [
    "food_name",
  ]);
  return newFood;
};

module.exports = {
  findFoodsByPotluckId,
  addFood,
};
