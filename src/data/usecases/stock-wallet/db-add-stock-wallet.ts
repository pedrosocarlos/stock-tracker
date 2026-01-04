import type {
  AddStockWallet,
  AddStockWalletParams,
  StockWallet,
  AddStockWalletRepository,
  GetStockWalletByNameRepository
} from './db-stock-wallet-protocols'

export class DbAddStockWallet implements AddStockWallet {
  constructor(
    private readonly addStockWalletRepository: AddStockWalletRepository,
    private readonly getStockWalletByNameRepository: GetStockWalletByNameRepository
  ) { }

  async add(data: AddStockWalletParams): Promise<StockWallet> {
    const stockWallet = await this.getStockWalletByNameRepository.getByName(data.name, data.id_account)
    if (stockWallet !== undefined) {
      throw new Error('Share owned not found')
    }
    const newStockWallet = await this.addStockWalletRepository.add(data)
    return newStockWallet
  }
}
