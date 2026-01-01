export interface QuotationModel {
  id_quotation: number
  value: number
  date: Date
  type: number
  id_asset?: number
  id_stock?: number
  id_crypto?: number
}
