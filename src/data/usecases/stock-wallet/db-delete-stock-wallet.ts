import type { DeleteStockWallet, DeleteStockWalletRepository, GetStockWalletRepository } from './db-stock-wallet-protocols'

export class DbDeleteStockWallet implements DeleteStockWallet {
  constructor (
    private readonly deleteStockWalletRepository: DeleteStockWalletRepository,
    private readonly getStockWalletRepository: GetStockWalletRepository
    ) {}

  async delete (stockWalletId: string): Promise<number> {
    const stockWallet = await this.getStockWalletRepository.get(stockWalletId)
    if (stockWallet.id_stock_wallet.length === 0) {
      throw new Error('Share owned not found')
    }
    await this.deleteStockWalletRepository.delete(stockWalletId)
    return 1
  }
}
