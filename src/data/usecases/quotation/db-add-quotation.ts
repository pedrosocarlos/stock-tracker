import type { AddQuotation, AddQuotationRepository, AddQuotationModel } from './db-quotation-protocols'

export class DbAddQuotation implements AddQuotation {
  constructor(private readonly addQuotationRepository: AddQuotationRepository) {}

  async add(quotation: AddQuotationModel[]): Promise<void> {
    await this.addQuotationRepository.add(quotation)
  }
}
