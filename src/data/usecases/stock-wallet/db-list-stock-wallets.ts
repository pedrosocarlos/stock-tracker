import type { ListStockWallets, StockWallet, ListStockWalletsRepository } from './db-stock-wallet-protocols'

export class DbListStockWallets implements ListStockWallets {
  constructor (private readonly listStockWalletsRepository: ListStockWalletsRepository) {}

  async list (accountId: string): Promise<StockWallet[]> {
    const stockWallets = await this.listStockWalletsRepository.list(accountId)
    return stockWallets
  }
}
