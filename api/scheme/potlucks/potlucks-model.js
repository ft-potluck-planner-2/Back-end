const db = require("../../data/db-config");

const findAll = () => {
  return db("potlucks_table");
};

const findById = async (id) => {
  const user = await db("potlucks_table").where("potluck_id", id).first();
  return user;
};

module.exports = {
  findAll,
  findById,
};
