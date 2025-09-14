import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('flow', function (table: any) {
    table.increments('id_flow').primary()

    table.string('name').notNullable()
    table.string('description')
    table.float('value').notNullable()
    table.date('date').notNullable().defaultTo(knex.fn.now())

    //1 - expense, 2 - revenue
    table.integer('id_flow_type').unsigned().notNullable()
    table.foreign('id_flow_type').references('id_flow_type').inTable('flow_type')

    // with movement is this from
    table.integer('id_movement').unsigned().notNullable()
    table.foreign('id_movement').references('id_movement').inTable('movement')

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('flow')
}
