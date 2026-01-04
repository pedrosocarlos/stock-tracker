import type { UpdateShareOwnedParams } from '../../../../domain/usecases/share-owned'
import type { ShareOwned } from '../../../../domain/models/share-owned'

export interface UpdateShareOwnedRepository {
  update: (data: UpdateShareOwnedParams) => Promise<ShareOwned>
}
