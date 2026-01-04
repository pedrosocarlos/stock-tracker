import type { ShareOwned } from '../../../../domain/models/share-owned'

export interface ListSharesOwnedRepository {
  listByWallet: (stockWalletId: string) => Promise<ShareOwned[]>
}
