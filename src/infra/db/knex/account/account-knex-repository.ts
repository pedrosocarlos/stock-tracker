import type { AddAccountRepository } from '../../../../data/protocols/db/account/add-account-repository'
import type { AddAccountModel } from '../../../../domain/usecases/account'
import type { AccountModel } from '../../../../domain/models/account'
import type { LoadAccountByIdRepository } from '../../../../data/protocols/db/account/get-account-by-id-repository'
import type { UpdateAccessTokenRepository } from '../../../../data/protocols/db/account/update-access-token-repository'

import { db } from "../../knex"

export class AccountRepository implements AddAccountRepository, LoadAccountByIdRepository, UpdateAccessTokenRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const result = await db('account').insert(accountData)

    return {
      id: result[0],
      name: accountData.name
    }
  }

  async findById(id: number): Promise<AccountModel> {
    const result = await db('account')
      .select('*')
      .where({ id_account: id })

    return result[0]
  }

  async updateAccessToken(id: string, token: string): Promise<void> {
    /* const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne({
      _id: id
    }, {
      $set: {
        accessToken: token
      }
    }) */
  }
}
