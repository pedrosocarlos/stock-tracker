import type { GetShareOwned, ShareOwned, GetShareOwnedRepository } from './db-share-owned-protocols'

export class DbGetShareOwned implements GetShareOwned {
  constructor (private readonly getShareOwnedRepository: GetShareOwnedRepository) {}

  async get (shareOwnedId: string): Promise<ShareOwned> {
    const shareOwned = await this.getShareOwnedRepository.get(shareOwnedId)
    return shareOwned
  }
}
