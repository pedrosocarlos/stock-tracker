import type { ListSharesOwned, ShareOwned, ListSharesOwnedRepository } from './db-share-owned-protocols'

export class DbListSharesOwned implements ListSharesOwned {
  constructor (private readonly listSharesOwnedRepository: ListSharesOwnedRepository) {}

  async listByWallet (stockWalletId: string): Promise<ShareOwned[]> {
    const sharesOwned = await this.listSharesOwnedRepository.listByWallet(stockWalletId)
    return sharesOwned
  }
}
