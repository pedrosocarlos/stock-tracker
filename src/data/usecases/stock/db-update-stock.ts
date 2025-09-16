import type { UpdateStock, UpdateStockRepository, UpdateStockModel } from './db-stock-protocols'

export class DbUpdateStock implements UpdateStock {
  constructor(
    private readonly updateStockRepository: UpdateStockRepository
  ) { }

  async update(data: UpdateStockModel): Promise<number | null> {
    return await this.updateStockRepository.update(data)
  }
}
