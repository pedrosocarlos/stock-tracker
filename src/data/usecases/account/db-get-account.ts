import type { GetAccount, AccountModel, LoadAccountByIdRepository } from './db-add-account-protocols'

export class DbGetAccount implements GetAccount {
  constructor (
    private readonly addAccountRepository: LoadAccountByIdRepository
  ) {}

  async get (id: number): Promise<AccountModel> {
    const account = await this.addAccountRepository.findById(id)
    return account
  }
}
