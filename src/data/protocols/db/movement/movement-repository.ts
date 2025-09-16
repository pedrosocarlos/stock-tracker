import type { MovementModel, InsertedMovementModel } from '../../../../domain/models/movement'
import type { AddMovementModel, UpdateMovementModel } from '../../../../domain/usecases/movement'

export interface AddMovementRepository {
  add: (movementData: AddMovementModel) => Promise<InsertedMovementModel>
}

export interface GetMovementRepository {
  findById: (id: number) => Promise<MovementModel | null>
}

export interface ListMovementRepository {
  list: (id: number) => Promise<MovementModel[] | null>
}

export interface UpdateMovementRepository {
  update: (data: UpdateMovementModel) => Promise<number | null>
}

export interface DeleteMovementRepository {
  delete: (id: number) => Promise<number>
}
