import type { DeleteShareOwned, DeleteShareOwnedRepository, GetShareOwnedRepository } from './db-share-owned-protocols'

export class DbDeleteShareOwned implements DeleteShareOwned {
  constructor (
    private readonly deleteShareOwnedRepository: DeleteShareOwnedRepository,
    private readonly getShareOwnedRepository: GetShareOwnedRepository
    ) {}

  async delete (shareOwnedId: string): Promise<number> {
    const shareOwned = await this.getShareOwnedRepository.get(shareOwnedId)
    if (shareOwned.id.length === 0) {
      throw new Error('Share owned not found')
    }
    await this.deleteShareOwnedRepository.delete(shareOwnedId)
    return 1
  }
}
