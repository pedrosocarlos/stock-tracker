import type { MovementModel, InsertedMovementModel, UpdateMovementModel, AddMovementModel } from '../models/movement'

export interface AddMovement {
  add: (account: AddMovementModel) => Promise<InsertedMovementModel>
}

export interface GetMovement {
  get: (id: number) => Promise<MovementModel | null>
}

export interface ListMovement {
  list: (flagDeleted?: number) => Promise<MovementModel[] | null>
}

export interface UpdateMovement {
  update: (data: UpdateMovementModel) => Promise<number | null>
}

export interface DeleteMovement {
  delete: (id: number) => Promise<number>
}