import type { MovementModel } from '../../../../domain/models/movement'

export interface GetMovementRepository {
  findById: (id: number) => Promise<MovementModel>
}
