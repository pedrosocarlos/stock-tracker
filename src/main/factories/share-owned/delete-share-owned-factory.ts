import { DeleteShareOwnedController } from '../../../presentation/controllers/share-owned/delete-share-owned-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeDeleteShareOwnedValidation } from './delete-share-owned-validation-factory'
import { DbDeleteShareOwned } from '../../../data/usecases/share-owned'
import { ShareOwnedKnexRepository } from '../../../infra/db/knex/share-owned'

export const makeDeleteShareOwnedController = (): Controller => {
  const shareOwnedKnexRepository = new ShareOwnedKnexRepository()
  const dbDeleteShareOwned = new DbDeleteShareOwned(shareOwnedKnexRepository, shareOwnedKnexRepository)
  const controller = new DeleteShareOwnedController(makeDeleteShareOwnedValidation(), dbDeleteShareOwned)
  return controller
}
