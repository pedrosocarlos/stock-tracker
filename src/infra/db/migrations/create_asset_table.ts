import type { Knex } from 'knex'

// tabela para guardar os bens que a conta possui
// usado para bens que representam aquisições diversas de ações
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('asset', function (table: any) {
    table.increments('id_asset').unsigned().primary()

    table.string('name').notNullable()
    table.string('description')

    //valor de aquisição do bem
    table.float('valor').unsigned().notNullable()

    table.date('date').notNullable().defaultTo(knex.fn.now())

    // 0 - other, 1 - car, 2 - house
    table.integer('type').unsigned().default(0)

    // 0 - selfpaid, 1 - gift, 2 - not full paid
    table.integer('payment_type').unsigned().default(0)

    // who is this from
    table.integer('id_account').unsigned().notNullable()
    table.foreign('id_account').references('id_account').inTable('account')

    // 0 - active, 1 - deleted
    table.integer('flag_deleted').unsigned().default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('asset')
}
