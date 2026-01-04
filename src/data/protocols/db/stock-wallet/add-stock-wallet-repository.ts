import type { AddStockWalletParams } from '../../../../domain/usecases/stock-wallet'
import type { StockWallet } from '../../../../domain/models/stock-wallet'

export interface AddStockWalletRepository {
  add: (data: AddStockWalletParams) => Promise<StockWallet>
}
