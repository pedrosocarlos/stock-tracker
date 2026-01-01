import type { ListQuotation, ListQuotationRepository, QuotationModel } from './db-quotation-protocols'

export class DbListQuotation implements ListQuotation {
  constructor(private readonly listQuotationRepository: ListQuotationRepository) {}

  async list(): Promise<QuotationModel[]> {
    const quotations = await this.listQuotationRepository.list()
    return quotations
  }
}
