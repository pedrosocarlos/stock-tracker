import type { ListStock, StockModel, ListStockRepository } from './db-stock-protocols'

export class DbListStock implements ListStock {
  constructor(
    private readonly listStockRepository: ListStockRepository
  ) { }

  async list(id: number): Promise<StockModel[] | null> {
    return await this.listStockRepository.list(id)
  }
}
