const db = require("../../data/db-config");

const findAll = () => {
  return db("potlucks_table");
};

const findById = async (id) => {
  const user = await db("potlucks_table").where("potluck_id", id).first();
  return user;
};

const insertPotluck = async (potluck) => {
  const newPotluck = await db("potlucks_table").insert(potluck, [
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
  const editedPotluck = await db("potlucks_table")
    .update(changes, [
      "potluck_id",
      "potluck_name",
      "potluck_location",
      "potluck_date",
      "potluck_time",
      "user_id",
    ])
    .where("potluck_id", Number(potluck_id));

  return editedPotluck;
};

module.exports = {
  findAll,
  findById,
  insertPotluck,
  updatePotluck,
};
