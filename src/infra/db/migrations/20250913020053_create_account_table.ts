import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('account', function (table: any) {
    table.increments('id_account').primary()

    table.string('name').notNullable().unique()

    // 0 - PF, 1 - PJ
    table.tinyint('type').default(0)

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('account')
}
