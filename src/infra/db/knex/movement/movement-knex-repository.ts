import type { AddMovementRepository } from '../../../../data/protocols/db/movement/add-movement-repository'
import type { AddMovementModel } from '../../../../domain/usecases/movement'
import type { MovementModel } from '../../../../domain/models/movement'
import type { GetMovementRepository } from '../../../../data/protocols/db/movement/get-movement-repository'

import { db } from "../../knex"

export class MovementRepository implements AddMovementRepository, GetMovementRepository {
  async add(movementData: AddMovementModel): Promise<MovementModel> {
    const result = await db('movement').insert(movementData)

    return {
      id: result[0],
      name: movementData.name
    }
  }

  async findById(id: number): Promise<MovementModel> {
    const result = await db('movement')
      .select('*')
      .where({ id_movement: id })

    return result[0]
  }
}
