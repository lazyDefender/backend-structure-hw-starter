exports.up = function (knex) {
    return knex.schema
        .alterTable("user", function (table) {
            table.float("balance").notNullable().defaultTo(0).alter();
        });
  };
  
  exports.down = function (knex) {
    return knex.schema
        .alterTable("user", function (table) {
            table.float("balance").notNullable().alter();
        });
  };
  