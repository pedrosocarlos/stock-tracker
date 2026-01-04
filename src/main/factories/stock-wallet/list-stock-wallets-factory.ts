import { ListStockWalletsController } from '../../../presentation/controllers/stock-wallet/list-stock-wallets-controller'
import type { Controller } from '../../../presentation/protocols'
import { DbListStockWallets } from '../../../data/usecases/stock-wallet'
import { StockWalletKnexRepository } from '../../../infra/db/knex/stock-wallet'

export const makeListStockWalletsController = (): Controller => {
  const stockWalletKnexRepository = new StockWalletKnexRepository()
  const dbListStockWallets = new DbListStockWallets(stockWalletKnexRepository)
  const controller = new ListStockWalletsController(dbListStockWallets)
  return controller
}
