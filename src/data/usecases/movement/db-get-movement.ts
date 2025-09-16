import type { GetMovement, MovementModel, GetMovementRepository } from './db-movement-protocols'

export class DbGetMovement implements GetMovement {
  constructor (
    private readonly getMovementRepository: GetMovementRepository
  ) {}

  async get (id: number): Promise<MovementModel | null> {
    const movement = await this.getMovementRepository.findById(id)
    return movement
  }
}
