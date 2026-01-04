import type { StockWallet } from '../../../../domain/models/stock-wallet'

export interface ListStockWalletsRepository {
  list: (accountId: string) => Promise<StockWallet[]>
}
