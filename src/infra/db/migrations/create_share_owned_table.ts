import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('share_owned', function (table: any) {
    table.increments('id_share_owned').unsigned().primary()

    // valor que foi pago na ação
    table.float('value').unsigned().notNullable()

    // quando foi comprado
    table.date('date').notNullable().defaultTo(knex.fn.now())

    // quantidade comprada
    table.float('amount').unsigned().notNullable().default(0)

    // quantidade comprada
    table.decimal('amount_crypto', 16, 8).unsigned().notNullable().default(0)

    // qual ação está sendo comprada
    table.integer('id_stock').unsigned().default(0)
    table.foreign('id_stock').references('id_stock').inTable('stocks')

    // qual cripto está sendo comprada
    table.integer('id_crypto').unsigned().default(0)
    table.foreign('id_crypto').references('id_crypto').inTable('crypto')

    // qual carteira essa ação pertence
    table.integer('id_stock_wallet').unsigned().notNullable()
    table.foreign('id_stock_wallet').references('id_stock_wallet').inTable('stock_wallet')

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').unsigned().default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('share_owned')
}
