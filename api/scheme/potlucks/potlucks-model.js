const db = require("../../data/db-config");

const findById = (user_id) => {
  return db("potlucks_table").where("user_id", user_id).first();
};

const addPotluck = async (event) => {
  const newPotluck = await db("potlucks_table").insert(event, [
    "potluck_id",
    "potluck_name",
    "potluck_location",
    "potluck_date",
    "potluck_time",
    "user_id",
  ]);
  return newPotluck;
};

const updatePotluck = async (potluck_id, changes) => {
  const updatedPotluck = await db("potlucks_table")
    .where("potluck_id", potluck_id)
    .update(changes, [
      "potluck_id",
      "potluck_name",
      "potluck_location",
      "potluck_date",
      "potluck_time",
      "user_id",
    ]);

  return updatedPotluck;
};

module.exports = {
  findById,
  addPotluck,
  updatePotluck,
};
