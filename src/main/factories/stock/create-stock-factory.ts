import { CreateStockController } from '../../../presentation/controllers/stock/create-stock-controller'
import { DbAddStock } from '../../../data/usecases/stock/db-add-stock'
import { StockRepository } from '../../../infra/db/knex/stock/stock-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { AxiosAdapter } from '../../../infra/axios/axios-adapter'

export const makeStockController = (): Controller => {
  const stockRepository = new StockRepository()
  const dbAddAccount = new DbAddStock(stockRepository)
  const stockController = new CreateStockController(dbAddAccount, new AxiosAdapter())
  return new LogControllerDecorator(stockController)
}
