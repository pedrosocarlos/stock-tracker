import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('movement', function (table: any) {
    table.increments('id_movement').primary()

    table.string('name').notNullable()

    table.string('description')

    table.integer('id_account').unsigned().notNullable()
    table.foreign('id_account').references('id_account').inTable('account')

    // table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('time_creation', { useTz: true }).defaultTo(knex.fn.now())

    // 0 - PF, 1 - PJ
    table.integer('type').default(0)

    // 0 - active, 1 - deleted
    table.integer('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('movement')
}
