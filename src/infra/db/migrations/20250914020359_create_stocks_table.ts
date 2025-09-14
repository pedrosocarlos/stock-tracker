import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('stocks', function (table: any) {
    table.increments('id_stock').primary()

    table.string('name').notNullable()
    table.string('description')
    table.string('ticker').notNullable()

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('stocks')
}