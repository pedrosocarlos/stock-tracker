import type { ShareOwned } from '../models/share-owned'

export type AddShareOwnedParams = Omit<ShareOwned, 'id'>

export interface AddShareOwned {
  add: (data: AddShareOwnedParams) => Promise<ShareOwned>
}

export interface GetShareOwned {
  get: (shareOwnedId: string) => Promise<ShareOwned>
}

export interface ListSharesOwned {
  listByWallet: (stockWalletId: string) => Promise<ShareOwned[]>
}

export type UpdateShareOwnedParams = Partial<Omit<ShareOwned, 'id' | 'stock_wallet_id'>> & {
  id: string
}

export interface UpdateShareOwned {
  update: (data: UpdateShareOwnedParams) => Promise<ShareOwned>
}

export interface DeleteShareOwned {
  delete: (shareOwnedId: string) => Promise<number>
}
