import type { AddMovementModel } from '../../../../domain/usecases/movement'
import type { MovementModel } from '../../../../domain/models/movement'

export interface AddMovementRepository {
  add: (movementData: AddMovementModel) => Promise<MovementModel>
}
