import { UpdateFlowController } from '../../../presentation/controllers/flow/update-flow-controller'
import { DbUpdateFlow } from '../../../data/usecases/flow/db-update-flow'
import { FlowRepository } from '../../../infra/db/knex/flow/flow-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { updateFlowValidation } from './update-flow-validation-factory'

export const updateFlowController = (): Controller => {
  const flowRepository = new FlowRepository()
  const dbUpdateFlow = new DbUpdateFlow(flowRepository)
  const flowController = new UpdateFlowController(dbUpdateFlow, updateFlowValidation())
  return new LogControllerDecorator(flowController)
}
