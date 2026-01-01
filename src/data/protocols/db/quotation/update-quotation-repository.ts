import type { AddQuotationModel } from '../../../../domain/usecases/quotation'

export interface UpdateQuotationRepository {
  update: (id: number, quotation: AddQuotationModel) => Promise<void>
}
