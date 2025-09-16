import type { Knex } from 'knex'

// tabela para guardar os investimentos feitos pela conta
// essa é uma movimentação financeira
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('stock_wallet', function (table: any) {
    table.increments('id_stock_wallet').unsigned().primary().unique()

    table.string('name').notNullable()
    table.string('description')

    table.timestamp('time_creation', { useTz: false }).defaultTo(knex.fn.now())

    // 0 - other, 1 - br stocks, 2 - us stocks, 3 - crypto
    table.integer('type').unsigned().default(0)

    // who is this from
    table.integer('id_account').unsigned().notNullable()
    table.foreign('id_account').references('id_account').inTable('account')

    // 0 - active, 1 - deleted
    table.integer('flag_deleted').unsigned().default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('stock_wallet')
}
