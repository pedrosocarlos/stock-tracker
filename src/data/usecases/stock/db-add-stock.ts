import type { AddStock, AddStockModel, InsertedStockModel, AddStockRepository } from './db-stock-protocols'

export class DbAddStock implements AddStock {
  constructor(
    private readonly addStockRepository: AddStockRepository
  ) { }

  async add(data: AddStockModel[]): Promise<InsertedStockModel> {
    return await this.addStockRepository.add(data)
  }
}
