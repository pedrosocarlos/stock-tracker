import { UpdateMovementController } from '../../../presentation/controllers/movement/update-movement-controller'
import { DbUpdateMovement } from '../../../data/usecases/movement/db-update-movement'
import { MovementRepository } from '../../../infra/db/knex/movement/movement-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { updateMovementValidation } from './update-movement-validation-factory'

export const updateMovementController = (): Controller => {
  const movementRepository = new MovementRepository()
  const dbUpdateMovement = new DbUpdateMovement(movementRepository)
  const movementController = new UpdateMovementController(dbUpdateMovement, updateMovementValidation())
  return new LogControllerDecorator(movementController)
}
