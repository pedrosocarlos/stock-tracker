import { DeleteMovementController } from '../../../presentation/controllers/movement/delete-movement-controller'
import { DbDeleteMovement } from '../../../data/usecases/movement/db-delete-movement'
import { MovementRepository } from '../../../infra/db/knex/movement/movement-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { deleteMovementValidation } from './delete-movement-validation-factory'

export const deleteMovementController = (): Controller => {
  const movementRepository = new MovementRepository()
  const dbDeleteMovement = new DbDeleteMovement(movementRepository)
  const movementController = new DeleteMovementController(dbDeleteMovement, deleteMovementValidation())
  return new LogControllerDecorator(movementController)
}
