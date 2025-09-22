import { DeleteFlowController } from '../../../presentation/controllers/flow/delete-flow-controller'
import { DbDeleteFlow } from '../../../data/usecases/flow/db-delete-flow'
import { FlowRepository } from '../../../infra/db/knex/flow/flow-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { deleteFlowValidation } from './delete-flow-validation-factory'

export const deleteFlowController = (): Controller => {
  const flowRepository = new FlowRepository()
  const dbDeleteFlow = new DbDeleteFlow(flowRepository)
  const flowController = new DeleteFlowController(dbDeleteFlow, deleteFlowValidation())
  return new LogControllerDecorator(flowController)
}
