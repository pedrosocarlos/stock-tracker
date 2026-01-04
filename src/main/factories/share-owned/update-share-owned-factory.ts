import { UpdateShareOwnedController } from '../../../presentation/controllers/share-owned/update-share-owned-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeUpdateShareOwnedValidation } from './update-share-owned-validation-factory'
import { DbUpdateShareOwned } from '../../../data/usecases/share-owned'
import { ShareOwnedKnexRepository } from '../../../infra/db/knex/share-owned'

export const makeUpdateShareOwnedController = (): Controller => {
  const shareOwnedKnexRepository = new ShareOwnedKnexRepository()
  const dbUpdateShareOwned = new DbUpdateShareOwned(shareOwnedKnexRepository, shareOwnedKnexRepository)
  const controller = new UpdateShareOwnedController(makeUpdateShareOwnedValidation(), dbUpdateShareOwned)
  return controller
}
