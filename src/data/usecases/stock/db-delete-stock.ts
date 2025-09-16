import type { DeleteStock, DeleteStockRepository } from './db-stock-protocols'

export class DbDeleteStock implements DeleteStock {
  constructor(
    private readonly getStockRepository: DeleteStockRepository
  ) { }

  async delete(id: number): Promise<number> {
    return await this.getStockRepository.delete(id)
  }
}
