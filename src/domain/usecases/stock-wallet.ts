import type { StockWallet } from '../models/stock-wallet'

export type AddStockWalletParams = Omit<StockWallet, 'id_stock_wallet' | 'flag_deleted'>
export interface AddStockWallet {
  add: (data: AddStockWalletParams) => Promise<StockWallet>
}

export interface GetStockWallet {
  get: (stockWalletId: string) => Promise<StockWallet | null>
}

export interface ListStockWallets {
  list: (accountId: string) => Promise<StockWallet[]>
}

export type UpdateStockWalletParams = Omit<StockWallet, 'id_account'>
export interface UpdateStockWallet {
  update: (data: UpdateStockWalletParams) => Promise<StockWallet | null>
}

export interface DeleteStockWallet {
  delete: (stockWalletId: string) => Promise<number>
}
