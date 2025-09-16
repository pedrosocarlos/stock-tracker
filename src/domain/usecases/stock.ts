import type { StockModel, AddStockModel, UpdateStockModel, InsertedStockModel } from '../models/stock'

export interface AddStock {
  add: (account: AddStockModel) => Promise<InsertedStockModel>
}

export interface GetStock {
  get: (id: number) => Promise<StockModel | null>
}

export interface ListStock {
  list: (flagDeleted?: number) => Promise<StockModel[] | null>
}

export interface UpdateStock {
  update: (data: UpdateStockModel) => Promise<number | null>
}

export interface DeleteStock {
  delete: (id: number) => Promise<number>
}