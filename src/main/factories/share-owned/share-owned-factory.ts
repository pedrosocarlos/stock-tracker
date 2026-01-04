import { ShareOwnedController } from '../../../presentation/controllers/share-owned/share-owned-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeShareOwnedValidation } from './share-owned-validation-factory'
import { DbAddShareOwned } from '../../../data/usecases/share-owned'
import { ShareOwnedKnexRepository } from '../../../infra/db/knex/share-owned'

export const makeShareOwnedController = (): Controller => {
  const shareOwnedKnexRepository = new ShareOwnedKnexRepository()
  const dbAddShareOwned = new DbAddShareOwned(shareOwnedKnexRepository, shareOwnedKnexRepository)
  const controller = new ShareOwnedController(makeShareOwnedValidation(), dbAddShareOwned)
  return controller
}
