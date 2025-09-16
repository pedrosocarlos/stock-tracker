import { ListStockController } from '../../../presentation/controllers/stock/list-stock-controller'
import { DbListStock } from '../../../data/usecases/stock/db-list-stock'
import { StockRepository } from '../../../infra/db/knex/stock/stock-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const listStockController = (): Controller => {
  const stockRepository = new StockRepository()
  const dbListStock = new DbListStock(stockRepository)
  const stockController = new ListStockController(dbListStock)
  return new LogControllerDecorator(stockController)
}
