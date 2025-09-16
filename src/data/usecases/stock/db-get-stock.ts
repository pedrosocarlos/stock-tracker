import type { GetStock, StockModel, GetStockRepository } from './db-stock-protocols'

export class DbGetStock implements GetStock {
  constructor(
    private readonly getStockRepository: GetStockRepository
  ) { }

  async get(id: number): Promise<StockModel | null> {
    return await this.getStockRepository.findById(id)
  }
}
