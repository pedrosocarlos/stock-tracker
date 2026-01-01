import type { QuotationModel } from '../models/quotation'

export interface AddQuotationModel {
  value: number
  date: Date
  type: number
  id_asset?: number
  id_stock?: number
  id_crypto?: number
}

export interface AddQuotation {
  add: (quotation: AddQuotationModel[]) => Promise<void>
}

export interface GetQuotation {
  get: (id: number) => Promise<QuotationModel>
}

export interface ListQuotation {
  list: () => Promise<QuotationModel[]>
}

export interface UpdateQuotation {
  update: (id: number, quotation: AddQuotationModel) => Promise<void>
}

export interface DeleteQuotation {
  delete: (id: number) => Promise<void>
}
