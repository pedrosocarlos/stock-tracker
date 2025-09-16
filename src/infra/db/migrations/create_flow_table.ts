import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('flow', function (table: any) {
    table.increments('id_flow').unsigned().primary().unique()

    table.string('name').notNullable()
    table.string('description')
    table.float('value').unsigned().notNullable()
    table.date('date').notNullable().defaultTo(knex.fn.now())

    //1 - expense, 2 - revenue
    table.integer('id_flow_type').unsigned().notNullable()

    // with movement is this from
    table.integer('id_movement').unsigned().notNullable()
    table.foreign('id_movement').references('id_movement').inTable('movement')

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').unsigned().default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('flow')
}
