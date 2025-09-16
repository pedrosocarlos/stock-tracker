import type { UpdateMovement, UpdateMovementRepository, UpdateMovementModel } from './db-movement-protocols'

export class DbUpdateMovement implements UpdateMovement {
  constructor (
    private readonly updateMovementRepository: UpdateMovementRepository
  ) {}

  async update (data: UpdateMovementModel): Promise<number | null> {
    const movement = await this.updateMovementRepository.update(data)
    return movement
  }
}
