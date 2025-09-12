import { GetAccountController } from '../../../presentation/controllers/account/get-account-controller'
import { DbGetAccount } from '../../../data/usecases/account/db-get-account'
import { AccountRepository } from '../../../infra/db/knex/account/account-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { getAccountValidation } from './get-account-validation-factory'

export const getAccountController = (): Controller => {
  const accountRepository = new AccountRepository()
  const dbGetAccount = new DbGetAccount(accountRepository)
  const signUpController = new GetAccountController(dbGetAccount, getAccountValidation())
  return new LogControllerDecorator(signUpController)
}
