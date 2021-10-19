const db = require("../../data/db-config");

const findAll = () => {
  return db("potlucks_table");
};

const findById = async (id) => {
  const user = await db("potlucks_table").where("potluck_id", id).first();
  return user;
};

async function insertPotLuck(potluck) {
  const [newPotluck] = await db("potlucks_table").insert(potluck, [
    "potluck_id",
    "potluck_name",
    "potluck_location",
    "potluck_date",
    "potluck_time",
  ]);
  return newPotluck;
}

module.exports = {
  findAll,
  findById,
  insertPotLuck
};
