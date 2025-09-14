import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('share_owned', function (table: any) {
    table.increments('id_share_owned').primary()

    table.string('name').notNullable()
    table.string('description')

    // valor que foi pago na ação
    table.float('value').notNullable()
    // quando foi comprado
    table.date('date').notNullable().defaultTo(knex.fn.now())
    // quantidade comprada
    table.float('amount').notNullable()

    table.integer('id_investment').unsigned().notNullable()
    table.foreign('id_investment').references('id_investment').inTable('investment')

    // qual ação está sendo comprada
    table.integer('id_stock').unsigned().notNullable()
    table.foreign('id_stock').references('id_stock').inTable('stocks')

    // 0 - br stock, 1 - usa stock, 2 - crypto
    table.tinyint('stock_type')

    //1 - buying, 2 - selling
    table.tinyint('in_or_out')

    // 0 - active, 1 - deleted
    table.tinyint('flag_deleted').default(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('share_owned')
}
