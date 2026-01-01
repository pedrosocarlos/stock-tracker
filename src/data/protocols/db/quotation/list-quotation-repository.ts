import type { QuotationModel } from '../../../../domain/models/quotation'

export interface ListQuotationRepository {
  list: () => Promise<QuotationModel[]>
}
