import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('flow_type', function (table: any) {
    table.increments('id_flow_type').primary()

    //1 - expense, 2 - revenue
    table.string('name').notNullable()

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('flow_type')
}
