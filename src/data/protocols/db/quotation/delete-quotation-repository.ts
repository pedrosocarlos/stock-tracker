export interface DeleteQuotationRepository {
  delete: (id: number) => Promise<void>
}
