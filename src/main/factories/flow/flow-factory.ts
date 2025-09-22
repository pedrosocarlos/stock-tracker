import { FlowController } from '../../../presentation/controllers/flow/flow-controller'
import { DbAddFlow } from '../../../data/usecases/flow/db-add-flow'
import { DbGetMovement } from '../../../data/usecases/movement/db-get-movement'
import { FlowRepository } from '../../../infra/db/knex/flow/flow-knex-repository'
import { MovementRepository } from '../../../infra/db/knex/movement/movement-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { makeFlowValidation } from './flow-validation-factory'

export const makeFlowController = (): Controller => {
  const flowRepository = new FlowRepository()
  const dbAddflow = new DbAddFlow(flowRepository)

  const movementRepository = new MovementRepository()
  const dbAddmovement = new DbGetMovement(movementRepository)
  
  const flowController = new FlowController(dbAddflow, dbAddmovement, makeFlowValidation())
  return new LogControllerDecorator(flowController)
}
