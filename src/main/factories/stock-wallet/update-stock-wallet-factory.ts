import { UpdateStockWalletController } from '../../../presentation/controllers/stock-wallet/update-stock-wallet-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeUpdateStockWalletValidation } from './update-stock-wallet-validation-factory'
import { DbUpdateStockWallet } from '../../../data/usecases/stock-wallet'
import { StockWalletKnexRepository } from '../../../infra/db/knex/stock-wallet'

export const makeUpdateStockWalletController = (): Controller => {
  const stockWalletKnexRepository = new StockWalletKnexRepository()
  const dbUpdateStockWallet = new DbUpdateStockWallet(stockWalletKnexRepository, stockWalletKnexRepository)
  const controller = new UpdateStockWalletController(makeUpdateStockWalletValidation(), dbUpdateStockWallet)
  return controller
}
