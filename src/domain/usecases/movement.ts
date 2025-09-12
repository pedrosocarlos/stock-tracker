import type { MovementModel } from '../models/movement'

export interface AddMovementModel {
  name: string
  type?: number
  flag_deleted?: number
}

export interface AddMovement {
  add: (account: AddMovementModel) => Promise<MovementModel>
}

export interface GetMovement {
  get: (id: number) => Promise<MovementModel>
}
