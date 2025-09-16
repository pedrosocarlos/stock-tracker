import type { StockModel, InsertedStockModel, AddStockModel, UpdateStockModel } from '../../../../domain/models/stock'
import type { GetStockRepository, AddStockRepository, ListStockRepository, UpdateStockRepository, DeleteStockRepository } from '../../../../data/protocols/db/stock/stock-repository'

import { db } from "../../knex"

export class StockRepository implements AddStockRepository, GetStockRepository, ListStockRepository, UpdateStockRepository, DeleteStockRepository {
  async add(data: AddStockModel): Promise<InsertedStockModel> {
    const result = await db('stock').insert(data)

    return { id: result[0] }
  }

  async findById(id: number): Promise<StockModel> {
    const result = await db('stock')
      .select('*')
      .where({ id_stock: id })

    return result[0]
  }

  async list(flagDeleted?: number): Promise<StockModel[] | null> {
    const result = await db('stock')
      .select('*')
      .where({ flag_deleted: flagDeleted ?? 0 })

    return result
  }

  async update(data: UpdateStockModel): Promise<number | null> {
    const result = await db('stock')
      .select('*')
      .where({ id_stock: data.id })
      .update({
        name: data.name,
        description: data.description,
        ticker: data.ticker,
        type: data.type,
        flag_deleted: data.flag_deleted
      })

    return result
  }

  async delete(id: number): Promise<number> {
    const result = await db('stock')
      .select('*')
      .where({ id_stock: id })
      .delete()

    return result
  }
}
