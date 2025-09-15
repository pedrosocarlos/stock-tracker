import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('movement', function (table: any) {
    table.increments('id_movement').unsigned().primary()

    table.string('name').notNullable()
    table.string('description')

    // who is this from
    table.integer('id_account').unsigned().notNullable()
    table.foreign('id_account').references('id_account').inTable('account')

    table.timestamp('time_creation', { useTz: false }).defaultTo(knex.fn.now())

    // 0 - payday, 1 - other
    table.integer('type').unsigned().default(0)

    // 0 - active, 1 - deleted
    table.integer('flag_deleted').unsigned().default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('movement')
}
