import { StockWalletController } from '../../../presentation/controllers/stock-wallet/stock-wallet-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeStockWalletValidation } from './stock-wallet-validation-factory'
import { DbAddStockWallet } from '../../../data/usecases/stock-wallet'
import { StockWalletKnexRepository } from '../../../infra/db/knex/stock-wallet'

export const makeStockWalletController = (): Controller => {
  const stockWalletKnexRepository = new StockWalletKnexRepository()
  const dbAddStockWallet = new DbAddStockWallet(stockWalletKnexRepository, stockWalletKnexRepository)
  const controller = new StockWalletController(makeStockWalletValidation(), dbAddStockWallet)
  return controller
}
