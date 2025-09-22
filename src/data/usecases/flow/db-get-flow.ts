import type { GetFlow, FlowModel, GetFlowRepository } from './db-flow-protocols'

export class DbGetFlow implements GetFlow {
  constructor (
    private readonly getFlowRepository: GetFlowRepository
  ) {}

  async get (id: number): Promise<FlowModel | null> {
    return await this.getFlowRepository.findById(id)
  }
}
