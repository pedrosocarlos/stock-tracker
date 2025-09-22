import type { AddFlow, AddFlowModel, InsertedFlowModel, AddFlowRepository } from '../flow/db-flow-protocols'

export class DbAddFlow implements AddFlow {
  constructor (
    private readonly addFlowRepository: AddFlowRepository
  ) {}

  async add (data: AddFlowModel): Promise<InsertedFlowModel> {
    return await this.addFlowRepository.add(Object.assign({}, data))
  }
}
