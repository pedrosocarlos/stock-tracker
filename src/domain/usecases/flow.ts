import type { FlowModel, InsertedFlowModel, UpdateFlowModel, AddFlowModel } from '../models/flow'

export interface AddFlow {
  add: (account: AddFlowModel) => Promise<InsertedFlowModel>
}

export interface GetFlow {
  get: (id: number) => Promise<FlowModel | null>
}

export interface ListFlow {
  list: (flagDeleted?: number) => Promise<FlowModel[] | null>
}

export interface UpdateFlow {
  update: (data: UpdateFlowModel) => Promise<number | null>
}

export interface DeleteFlow {
  delete: (id: number) => Promise<number>
}