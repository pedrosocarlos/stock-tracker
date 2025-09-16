import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('crypto', function (table: any) {
    table.increments('id_crypto').unsigned().primary().unique()

    table.string('name').notNullable()
    table.string('description')
    table.string('ticker').notNullable().unique()

    // 0 - other, 1 - main coin, 2 - outcoin
    table.tinyint('crypto_type').unsigned().default(0)

    // 0 - other, 1 - bitcoin, 2 - ethereum, 3 - polygon
    table.tinyint('network').unsigned().default(0)

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').unsigned().default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('crypto')
}