exports.up = async (knex) => {
  await knex.schema
    .createTable("users_table", (table) => {
      table.increments("user_id");
      table.string("username", 200).notNullable();
      table.string("password").notNullable();
    })
    .createTable("potlucks_table", (table) => {
      table.increments("potluck_id");
      table.string("potluck_name", 200).notNullable();
      table.string("potluck_location", 200).notNullable();
      table.string("potluck_date", 200).notNullable();
      table.string("potluck_time", 200).notNullable();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users_table")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
    })
    .createTable("foods_table", (table) => {
      table.increments("food_id");
      table.string("food_name", 200).notNullable();
      table
        .integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks_table")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
    })
    .createTable("attendance_table", (table) => {
      table.increments("attendance_table_id");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users_table")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      table
        .integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks_table")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      table.boolean("attending").notNullable().defaultTo(false);
    })
    .createTable("confirmed_foods_table", (table) => {
      table.increments("confirmed_foods_table_id");
      table
        .integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potluck_id")
        .inTable("potlucks_table")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      table
        .integer("food_id")
        .unsigned()
        .notNullable()
        .references("food_id")
        .inTable("foods_table")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users_table")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("confirmed_foods_table")
    .dropTableIfExists("attendance_table")
    .dropTableIfExists("foods_table")
    .dropTableIfExists("potlucks_table")
    .dropTableIfExists("users_table");
};
