import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('stocks', function (table: any) {
    table.increments('id_stock').unsigned().primary().unique()

    table.string('name').notNullable()
    table.string('description')
    table.string('ticker').notNullable().unique()

    // 0 - other, 1 - usa stock, 2 - br stock
    table.tinyint('stock_type').unsigned().default(0)

    // criar uma divisão de setor e sub setor
    //table.tinyint('flag_deleted').default(0)

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').unsigned().default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('stocks')
}