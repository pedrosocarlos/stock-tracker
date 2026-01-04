import { ListSharesOwnedController } from '../../../presentation/controllers/share-owned/list-shares-owned-controller'
import type { Controller } from '../../../presentation/protocols'
import { makeListSharesOwnedValidation } from './list-shares-owned-validation-factory'
import { DbListSharesOwned } from '../../../data/usecases/share-owned'
import { ShareOwnedKnexRepository } from '../../../infra/db/knex/share-owned'

export const makeListSharesOwnedController = (): Controller => {
  const shareOwnedKnexRepository = new ShareOwnedKnexRepository()
  const dbListSharesOwned = new DbListSharesOwned(shareOwnedKnexRepository)
  const controller = new ListSharesOwnedController(makeListSharesOwnedValidation(), dbListSharesOwned)
  return controller
}
