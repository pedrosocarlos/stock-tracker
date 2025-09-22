import type { AddFlowModel, UpdateFlowModel, FlowModel, InsertedFlowModel } from '../../../../domain/models/flow'

export interface AddFlowRepository {
  add: (flowData: AddFlowModel) => Promise<InsertedFlowModel>
}

export interface GetFlowRepository {
  findById: (id: number) => Promise<FlowModel | null>
}

export interface ListFlowRepository {
  list: (id: number) => Promise<FlowModel[] | null>
}

export interface UpdateFlowRepository {
  update: (data: UpdateFlowModel) => Promise<number | null>
}

export interface DeleteFlowRepository {
  delete: (id: number) => Promise<number>
}
