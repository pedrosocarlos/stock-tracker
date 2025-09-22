import { MovementController } from '../../../presentation/controllers/movement/movement-controller'
import { DbAddMovement } from '../../../data/usecases/movement/db-add-movement'
import { MovementRepository } from '../../../infra/db/knex/movement/movement-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { makeMovementValidation } from './movement-validation-factory'

export const makeMovementController = (): Controller => {
  const movementRepository = new MovementRepository()
  const dbAddMovement = new DbAddMovement(movementRepository)
  const movementController = new MovementController(dbAddMovement, makeMovementValidation())
  return new LogControllerDecorator(movementController)
}
