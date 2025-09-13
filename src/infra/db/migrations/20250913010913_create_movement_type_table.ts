import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('movement_type', function (table: any) {
    table.increments('id_movement_type').primary()

    table.integer('id_movement').unsigned().notNullable()
    table.foreign('id_movement').references('id_movement').inTable('movement')

    table.date('date')

    //1 - salary, 2 - expense, 3 - revenue
    table.string('name').notNullable()

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('movement_type')
}
