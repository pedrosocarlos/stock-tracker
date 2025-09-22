import { GetFlowController } from '../../../presentation/controllers/flow/get-flow-controller'
import { DbGetFlow } from '../../../data/usecases/flow/db-get-flow'
import { FlowRepository } from '../../../infra/db/knex/flow/flow-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { getFlowValidation } from './get-flow-validation-factory'

export const getFlowController = (): Controller => {
  const flowRepository = new FlowRepository()
  const dbGetFlow = new DbGetFlow(flowRepository)
  const flowController = new GetFlowController(dbGetFlow, getFlowValidation())
  return new LogControllerDecorator(flowController)
}
