import { GetMovementController } from '../../../presentation/controllers/movement/get-movement-controller'
import { DbGetMovement } from '../../../data/usecases/movement/db-get-movement'
import { MovementRepository } from '../../../infra/db/knex/movement/movement-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { getMovementValidation } from './get-movement-validation-factory'

export const getMovementController = (): Controller => {
  const movementRepository = new MovementRepository()
  const dbGetMovement = new DbGetMovement(movementRepository)
  const movementController = new GetMovementController(dbGetMovement, getMovementValidation())
  return new LogControllerDecorator(movementController)
}
