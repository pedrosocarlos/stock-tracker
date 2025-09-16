import type { AddMovement, AddMovementModel, InsertedMovementModel, AddMovementRepository } from './db-movement-protocols'

export class DbAddMovement implements AddMovement {
  constructor (
    private readonly addMovementRepository: AddMovementRepository
  ) {}

  async add (movementData: AddMovementModel): Promise<InsertedMovementModel> {
    const movement = await this.addMovementRepository.add(Object.assign({}, movementData))
    return movement
  }
}
