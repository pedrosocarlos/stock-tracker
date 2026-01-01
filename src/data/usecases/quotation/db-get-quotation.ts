import type { GetQuotation, GetQuotationRepository, QuotationModel } from './db-quotation-protocols'

export class DbGetQuotation implements GetQuotation {
  constructor(private readonly getQuotationRepository: GetQuotationRepository) {}

  async get(id: number): Promise<QuotationModel> {
    const quotation = await this.getQuotationRepository.get(id)
    return quotation
  }
}
