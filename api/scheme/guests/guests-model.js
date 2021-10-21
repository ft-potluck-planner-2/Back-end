const db = require("../../data/db-config");

const addGuest = async (user_id, potluck_id) => {
  const newGuest = await db("attendance_table").insert(
    { user_id, potluck_id },
    ["user_id", "potluck_id"]
  );
  return newGuest;
};

module.exports = {
  addGuest,
};
