import type { ShareOwned } from '../../../../domain/models/share-owned'

export interface GetShareOwnedByStockAndWalletRepository {
  getByStockAndWallet: (stockId: string, stockWalletId: string) => Promise<ShareOwned | undefined>
}
