import type { StockWallet } from '../../../../domain/models/stock-wallet'

export interface GetStockWalletByNameRepository {
  getByName: (name: string, accountId: string) => Promise<StockWallet | undefined>
}
