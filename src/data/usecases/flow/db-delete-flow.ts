import type { DeleteFlow, DeleteFlowRepository } from './db-flow-protocols'

export class DbDeleteFlow implements DeleteFlow {
  constructor (
    private readonly getFlowRepository: DeleteFlowRepository
  ) {}

  async delete (id: number): Promise<number> {
    return await this.getFlowRepository.delete(id)
  }
}
