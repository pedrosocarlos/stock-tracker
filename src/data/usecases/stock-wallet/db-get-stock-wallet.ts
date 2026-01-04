import type { GetStockWallet, StockWallet, GetStockWalletRepository } from './db-stock-wallet-protocols'

export class DbGetStockWallet implements GetStockWallet {
  constructor (private readonly getStockWalletRepository: GetStockWalletRepository) {}

  async get (stockWalletId: string): Promise<StockWallet> {
    const stockWallet = await this.getStockWalletRepository.get(stockWalletId)
    return stockWallet
  }
}
