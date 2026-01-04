import type {
  UpdateStockWallet,
  UpdateStockWalletParams,
  StockWallet,
  UpdateStockWalletRepository,
  GetStockWalletRepository
} from './db-stock-wallet-protocols'

export class DbUpdateStockWallet implements UpdateStockWallet {
  constructor (
    private readonly updateStockWalletRepository: UpdateStockWalletRepository,
    private readonly getStockWalletRepository: GetStockWalletRepository
  ) {}

  async update (data: UpdateStockWalletParams): Promise<StockWallet> {
    const stockWallet = await this.getStockWalletRepository.get(data.id_stock_wallet)

    if (stockWallet.id_stock_wallet.length === 0) {
      throw new Error('Share owned not found')
    }

    const updatedStockWallet = await this.updateStockWalletRepository.update(data)
    return updatedStockWallet
  }
}
