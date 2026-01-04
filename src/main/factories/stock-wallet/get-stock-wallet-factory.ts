import { GetStockWalletController } from '../../../presentation/controllers/stock-wallet/get-stock-wallet-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeGetStockWalletValidation } from './get-stock-wallet-validation-factory'
import { DbGetStockWallet } from '../../../data/usecases/stock-wallet'
import { StockWalletKnexRepository } from '../../../infra/db/knex/stock-wallet'

export const makeGetStockWalletController = (): Controller => {
  const stockWalletKnexRepository = new StockWalletKnexRepository()
  const dbGetStockWallet = new DbGetStockWallet(stockWalletKnexRepository)
  const controller = new GetStockWalletController(makeGetStockWalletValidation(), dbGetStockWallet)
  return controller
}
