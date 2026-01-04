import type { UpdateStockWalletParams } from '../../../../domain/usecases/stock-wallet'
import type { StockWallet } from '../../../../domain/models/stock-wallet'

export interface UpdateStockWalletRepository {
  update: (data: UpdateStockWalletParams) => Promise<StockWallet>
}
