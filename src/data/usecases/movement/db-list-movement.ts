import type { ListMovement, MovementModel, ListMovementRepository } from './db-movement-protocols'

export class DbListMovement implements ListMovement {
  constructor (
    private readonly listMovementRepository: ListMovementRepository
  ) {}

  async list (id: number): Promise<MovementModel[] | null> {
    const movement = await this.listMovementRepository.list(id)
    return movement
  }
}
