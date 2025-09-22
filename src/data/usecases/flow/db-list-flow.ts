import type { ListFlow, FlowModel, ListFlowRepository } from '../flow/db-flow-protocols'

export class DbListFlow implements ListFlow {
  constructor (
    private readonly listFlowRepository: ListFlowRepository
  ) {}

  async list (id: number): Promise<FlowModel[] | null> {
    return await this.listFlowRepository.list(id)
  }
}
