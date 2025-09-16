import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('quotation', function (table: any) {
    table.increments('id_quotation').unsigned().primary().unique()

    //valor da cotação atual
    table.decimal('value', 12, 3).unsigned().notNullable()

    table.date('date').notNullable().defaultTo(knex.fn.now())

    // 0 - other, 1 - stock, 2 - asset
    table.integer('type').unsigned().default(0)

    table.integer('id_asset').unsigned().default(0)
    table.foreign('id_asset').references('id_asset').inTable('asset')

    table.integer('id_stock').unsigned().default(0)
    table.foreign('id_stock').references('id_stock').inTable('stock')

    table.integer('id_crypto').unsigned().default(0)
    table.foreign('id_crypto').references('id_crypto').inTable('crypto')

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').unsigned().default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('quotation')
}
