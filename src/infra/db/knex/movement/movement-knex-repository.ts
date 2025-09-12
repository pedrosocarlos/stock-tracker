import type { AddMovementRepository } from '../../../../data/protocols/db/movement/add-movement-repository'
import type { AddAccountModel } from '../../../../domain/usecases/account'
import type { AccountModel } from '../../../../domain/models/account'
import type { GetMovementRepository } from '../../../../data/protocols/db/movement/get-movement-repository'

import { db } from "../../knex"

export class MovementRepository implements AddMovementRepository, GetMovementRepository {
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
      .where({ id })

    console.log(result)

    return result[0]
  }
}
