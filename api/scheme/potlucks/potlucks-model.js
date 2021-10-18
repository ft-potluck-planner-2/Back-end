const db = require("../../data/db-config");

const findAll = () => {
  return db("potlucks_table");
};

const findById = async (id) => {
  const user = await db("potlucks_table").where("potluck_id", id).first();
  return user;
};

const addPotluck = async (event) => {
  const newPotluck = await db("potlucks_table").insert(event, [
    "potluck_name",
    "potluck_location",
    "potluck_date",
    "potluck_time",
    "user_id",
  ]);
  return newPotluck;
};

module.exports = {
  findAll,
  findById,
  addPotluck,
};
