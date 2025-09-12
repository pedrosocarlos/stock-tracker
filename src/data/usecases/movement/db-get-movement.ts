import type { GetMovement, MovementModel, GetMovementRepository } from './db-add-movement-protocols'

export class DbGetMovement implements GetMovement {
  constructor (
    private readonly addMovementRepository: GetMovementRepository
  ) {}

  async get (id: number): Promise<MovementModel> {
    const movement = await this.addMovementRepository.findById(id)
    return movement
  }
}
