import type { StockModel, InsertedStockModel, AddStockModel, UpdateStockModel } from '../../../../domain/models/stock'

export interface AddStockRepository {
  add: (data: AddStockModel) => Promise<InsertedStockModel>
}

export interface GetStockRepository {
  findById: (id: number) => Promise<StockModel | null>
}

export interface ListStockRepository {
  list: (id: number) => Promise<StockModel[] | null>
}

export interface UpdateStockRepository {
  update: (data: UpdateStockModel) => Promise<number | null>
}

export interface DeleteStockRepository {
  delete: (id: number) => Promise<number>
}
