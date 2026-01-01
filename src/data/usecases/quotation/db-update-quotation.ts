import type { UpdateQuotation, UpdateQuotationRepository, AddQuotationModel } from './db-quotation-protocols'

export class DbUpdateQuotation implements UpdateQuotation {
  constructor(private readonly updateQuotationRepository: UpdateQuotationRepository) {}

  async update(id: number, quotation: AddQuotationModel): Promise<void> {
    await this.updateQuotationRepository.update(id, quotation)
  }
}
