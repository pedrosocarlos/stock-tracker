import type {
  AddShareOwned,
  AddShareOwnedParams,
  ShareOwned,
  AddShareOwnedRepository,
  GetShareOwnedByStockAndWalletRepository
} from './db-share-owned-protocols'

export class DbAddShareOwned implements AddShareOwned {
  constructor (
    private readonly addShareOwnedRepository: AddShareOwnedRepository,
    private readonly getShareOwnedByStockAndWalletRepository: GetShareOwnedByStockAndWalletRepository
  ) {}

  async add (data: AddShareOwnedParams): Promise<ShareOwned> {
    const shareOwned = await this.getShareOwnedByStockAndWalletRepository.getByStockAndWallet(data.stock_id, data.stock_wallet_id)
    if (shareOwned !== undefined) {
      throw new Error('Share owned not found')
    }
    const newShareOwned = await this.addShareOwnedRepository.add(data)
    return newShareOwned
  }
}
