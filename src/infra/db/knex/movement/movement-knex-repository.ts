import type { AddMovementModel, UpdateMovementModel } from '../../../../domain/usecases/movement'
import type { MovementModel, InsertedMovementModel } from '../../../../domain/models/movement'
import type { GetMovementRepository, AddMovementRepository, ListMovementRepository, UpdateMovementRepository, DeleteMovementRepository } from '../../../../data/protocols/db/movement/movement-repository'

import { db } from "../../knex"

export class MovementRepository implements AddMovementRepository, GetMovementRepository, ListMovementRepository, UpdateMovementRepository, DeleteMovementRepository {
  async add(movementData: AddMovementModel): Promise<InsertedMovementModel> {
    const result = await db('movement').insert(movementData)

    return { id: result[0] }
  }

  async findById(id: number): Promise<MovementModel> {
    const result = await db('movement')
      .select('*')
      .where({ id_movement: id })

    return result[0]
  }

  async list(flagDeleted?: number): Promise<MovementModel[] | null> {
    const result = await db('movement')
      .select('*')
      .where({ flag_deleted: flagDeleted ?? 0 })

    return result
  }

  async update(data: UpdateMovementModel): Promise<number | null> {
    const result = await db('movement')
      .select('*')
      .where({ id_movement: data.id })
      .update({
        name: data.name,
        description: data.description,
        id_account: data.id_account,
        type: data.type,
        flag_deleted: data.flag_deleted
      })

    return result
  }

  async delete(id: number): Promise<number> {
    const result = await db('movement')
      .select('*')
      .where({ id_movement: id })
      .delete()

    return result
  }
}
