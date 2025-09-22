import type {
  FlowModel, InsertedFlowModel, AddFlowModel,
  UpdateFlowModel
} from '../../../../domain/models/flow'

import type {
  GetFlowRepository, AddFlowRepository, ListFlowRepository,
  UpdateFlowRepository, DeleteFlowRepository
} from '../../../../data/protocols/db/flow/flow-repository'

import { db } from "../../knex"

export class FlowRepository implements AddFlowRepository, GetFlowRepository, ListFlowRepository, UpdateFlowRepository, DeleteFlowRepository {
  async add(flowData: AddFlowModel): Promise<InsertedFlowModel> {
    const result = await db('flow').insert(flowData)

    return { id: result[0] }
  }

  async findById(id: number): Promise<FlowModel> {
    const result = await db('flow')
      .select('*')
      .where({ id_flow: id })

    return result[0]
  }

  async list(flagDeleted?: number): Promise<FlowModel[] | null> {
    const result = await db('flow')
      .select('*')
      .where({ flag_deleted: flagDeleted ?? 0 })

    return result
  }

  async update(data: UpdateFlowModel): Promise<number | null> {
    const result = await db('flow')
      .where({ id_flow: data.id })
      .update({
        name: data.name,
        description: data.description,
        value: data.value,
        date: data.date,
        id_flow_type: data.id_flow_type,
        id_movement: data.id_movement,
        flag_deleted: data.flag_deleted
      })

    return result
  }

  async delete(id: number): Promise<number> {
    const result = await db('flow')
      .select('*')
      .where({ id_flow: id })
      .delete()

    return result
  }
}
