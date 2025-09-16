export interface StockModel {
  id: number
  name: string
  description: string
  ticker: string
  stock_type: number
  flag_deleted: number
}

export interface InsertedStockModel {
  id: number
}

export interface AddStockModel {
  name: string
  description?: string
  ticker: string
  stock_type: number
  flag_deleted?: number
}

export interface UpdateStockModel {
  id: number
  name?: string
  description?: string
  ticker?: string
  stock_type?: number
  flag_deleted?: number
}

export interface StockData {
  name: string
  ticker: string
  stock_type: number
}