import { DeleteStockWalletController } from '../../../presentation/controllers/stock-wallet/delete-stock-wallet-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeDeleteStockWalletValidation } from './delete-stock-wallet-validation-factory'
import { DbDeleteStockWallet } from '../../../data/usecases/stock-wallet'
import { StockWalletKnexRepository } from '../../../infra/db/knex/stock-wallet'

export const makeDeleteStockWalletController = (): Controller => {
  const stockWalletKnexRepository = new StockWalletKnexRepository()
  const dbDeleteStockWallet = new DbDeleteStockWallet(stockWalletKnexRepository, stockWalletKnexRepository)
  const controller = new DeleteStockWalletController(makeDeleteStockWalletValidation(), dbDeleteStockWallet)
  return controller
}
