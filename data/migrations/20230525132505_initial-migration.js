/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable('recipes', table => {
      table.increments('recipes_id')
      table.string('recipes_name', 200).notNullable().unique()
    })
    .createTable('ingredients', table => {
      table.increments('ing_id')
      table.string('ing_name', 200).notNullable().unique()
      table.string('ing_unit', 50).notNullable()
    })
    .createTable('steps', table => {
      table.increments('steps_id')
      table.string('instructions', 200).notNullable()
      table.integer('steps_order').notNullable()
      table.integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('recipes_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('steps_ingredients', table => {
      table.increments('steps_ing_id')
      table.float('quality').notNullable()
      table.integer('step_id')
        .unsigned()
        .notNullable()
        .references('steps_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')

      table.integer('ing_id')
        .unsigned()
        .notNullable()
        .references('ing_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
