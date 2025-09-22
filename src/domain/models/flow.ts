export interface FlowModel {
  id_flow: number
  name: string
  description: string
  value: number
  date: string
  id_flow_type: number
  id_movement: number
  flag_deleted: number
}

export interface InsertedFlowModel {
  id: number
}

export interface AddFlowModel {
  name: string
  description?: string
  value: number
  date?: string
  id_flow_type?: number
  id_movement: number
  flag_deleted?: number
}

export interface UpdateFlowModel {
  id: number
  name?: string
  description?: string
  value?: number
  date?: string
  id_flow_type?: number
  id_movement?: number
  flag_deleted?: number
}