import type { StockWallet } from '../../../../domain/models/stock-wallet'

export interface GetStockWalletRepository {
  get: (stockWalletId: string) => Promise<StockWallet>
}
