import type { Knex } from "knex";

// tabela para guardar os bens que a conta possui
// isso 
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('asset', function (table: any) {
    table.increments('id_asset').primary()

    table.string('name').notNullable()
    table.string('description')
    table.float('valor').notNullable()

    // who is this from
    table.integer('id_investment').unsigned().notNullable()
    table.foreign('id_investment').references('id_investment').inTable('investment')

    table.date('date').notNullable().defaultTo(knex.fn.now())

    // 0 - car, 1 - other
    table.integer('type').default(0)

    // 0 - selfpaid, 1 - gift, 2 - not full paid
    table.integer('payment_type').default(0)

    // 0 - active, 1 - deleted
    table.integer('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('asset')
}
