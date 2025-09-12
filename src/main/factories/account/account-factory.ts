import { AccountController } from '../../../presentation/controllers/account/account-controller'
import { DbAddAccount } from '../../../data/usecases/account/db-add-account'
import { AccountRepository } from '../../../infra/db/knex/account/account-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { makeAccountValidation } from './account-validation-factory'

export const makeAccountController = (): Controller => {
  const accountRepository = new AccountRepository()
  const dbAddAccount = new DbAddAccount(accountRepository)
  const accountController = new AccountController(dbAddAccount, makeAccountValidation())
  return new LogControllerDecorator(accountController)
}
