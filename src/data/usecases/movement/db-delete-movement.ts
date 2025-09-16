import type { DeleteMovement, DeleteMovementRepository } from './db-movement-protocols'

export class DbDeleteMovement implements DeleteMovement {
  constructor (
    private readonly getMovementRepository: DeleteMovementRepository
  ) {}

  async delete (id: number): Promise<number> {
    const movement = await this.getMovementRepository.delete(id)
    return movement
  }
}
