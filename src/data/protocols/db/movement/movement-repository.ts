import type { MovementModel, InsertedMovementModel, AddMovementModel, UpdateMovementModel } from '../../../../domain/models/movement'

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
