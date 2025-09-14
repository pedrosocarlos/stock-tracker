import type { Knex } from "knex";

// tabela para guardar os investimentos feitos pela conta
// essa é uma movimentação financeira
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('investment', function (table: any) {
    table.increments('id_investment').primary()

    table.string('name').notNullable()
    table.string('description')

    // who is this from
    table.integer('id_account').unsigned().notNullable()
    table.foreign('id_account').references('id_account').inTable('account')

    table.timestamp('time_creation', { useTz: false }).defaultTo(knex.fn.now())

    // 0 - stocks, 1 - other
    table.integer('type').default(0)

    // 0 - active, 1 - deleted
    table.integer('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('investment')
}
