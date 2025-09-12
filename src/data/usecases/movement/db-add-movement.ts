import type { AddMovement, AddMovementModel, MovementModel, AddMovementRepository } from './db-add-movement-protocols'

export class DbAddMovement implements AddMovement {
  constructor (
    private readonly addMovementRepository: AddMovementRepository
  ) {}

  async add (movementData: AddMovementModel): Promise<MovementModel> {
    const movement = await this.addMovementRepository.add(Object.assign({}, movementData))
    return movement
  }
}
