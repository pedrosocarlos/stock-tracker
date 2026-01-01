import type { QuotationModel } from '../../../../domain/models/quotation'

export interface GetQuotationRepository {
  get: (id: number) => Promise<QuotationModel>
}
