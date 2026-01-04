import type { ShareOwned } from '../../../../domain/models/share-owned'

export interface GetShareOwnedRepository {
  get: (shareOwnedId: string) => Promise<ShareOwned>
}
