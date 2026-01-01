import type { DeleteQuotation, DeleteQuotationRepository } from './db-quotation-protocols'

export class DbDeleteQuotation implements DeleteQuotation {
  constructor(private readonly deleteQuotationRepository: DeleteQuotationRepository) {}

  async delete(id: number): Promise<void> {
    await this.deleteQuotationRepository.delete(id)
  }
}
