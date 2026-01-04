
export interface DeleteStockWalletRepository {
  delete: (stockWalletId: string) => Promise<void>
}
