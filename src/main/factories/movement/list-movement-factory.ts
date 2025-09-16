import { ListMovementController } from '../../../presentation/controllers/movement/list-movement-controller'
import { DbListMovement } from '../../../data/usecases/movement/db-list-movement'
import { MovementRepository } from '../../../infra/db/knex/movement/movement-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const listMovementController = (): Controller => {
  const movementRepository = new MovementRepository()
  const dbListMovement = new DbListMovement(movementRepository)
  const movementController = new ListMovementController(dbListMovement)
  return new LogControllerDecorator(movementController)
}
