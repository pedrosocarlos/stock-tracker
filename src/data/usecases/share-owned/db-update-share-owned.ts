import type {
  UpdateShareOwned,
  UpdateShareOwnedParams,
  ShareOwned,
  UpdateShareOwnedRepository,
  GetShareOwnedRepository
} from './db-share-owned-protocols'

export class DbUpdateShareOwned implements UpdateShareOwned {
  constructor (
    private readonly updateShareOwnedRepository: UpdateShareOwnedRepository,
    private readonly getShareOwnedRepository: GetShareOwnedRepository
  ) {}

  async update (data: UpdateShareOwnedParams): Promise<ShareOwned> {
    const shareOwned = await this.getShareOwnedRepository.get(data.id)
    if (shareOwned.id.length === 0) {
      throw new Error('Share owned not found')
    }
    const updatedShareOwned = await this.updateShareOwnedRepository.update(data)
    return updatedShareOwned
  }
}
