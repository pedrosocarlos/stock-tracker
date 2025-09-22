import { ListFlowController } from '../../../presentation/controllers/flow/list-flow-controller'
import { DbListFlow } from '../../../data/usecases/flow/db-list-flow'
import { FlowRepository } from '../../../infra/db/knex/flow/flow-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const listFlowController = (): Controller => {
  const flowRepository = new FlowRepository()
  const dbListFlow = new DbListFlow(flowRepository)
  const flowController = new ListFlowController(dbListFlow)
  return new LogControllerDecorator(flowController)
}
