import { GetShareOwnedController } from '../../../presentation/controllers/share-owned/get-share-owned-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeGetShareOwnedValidation } from './get-share-owned-validation-factory'
import { DbGetShareOwned } from '../../../data/usecases/share-owned'
import { ShareOwnedKnexRepository } from '../../../infra/db/knex/share-owned'

export const makeGetShareOwnedController = (): Controller => {
  const shareOwnedKnexRepository = new ShareOwnedKnexRepository()
  const dbGetShareOwned = new DbGetShareOwned(shareOwnedKnexRepository)
  const controller = new GetShareOwnedController(makeGetShareOwnedValidation(), dbGetShareOwned)
  return controller
}
