import type { AddShareOwnedParams } from '../../../../domain/usecases/share-owned'
import type { ShareOwned } from '../../../../domain/models/share-owned'

export interface AddShareOwnedRepository {
  add: (data: AddShareOwnedParams) => Promise<ShareOwned>
}
