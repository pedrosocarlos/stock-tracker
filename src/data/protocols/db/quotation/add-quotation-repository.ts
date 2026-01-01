import type { AddQuotationModel } from '../../../../domain/usecases/quotation'

export interface AddQuotationRepository {
  add: (quotation: AddQuotationModel[]) => Promise<void>
}
