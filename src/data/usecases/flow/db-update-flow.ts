import type { UpdateFlow, UpdateFlowRepository, UpdateFlowModel } from './db-flow-protocols'

export class DbUpdateFlow implements UpdateFlow {
  constructor (
    private readonly updateFlowRepository: UpdateFlowRepository
  ) {}

  async update (data: UpdateFlowModel): Promise<number | null> {
    return await this.updateFlowRepository.update(data)
  }
}
