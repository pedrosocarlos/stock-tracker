import type {
  HttpResponse, HttpRequest, Controller,
  AddFlow, GetMovement
} from '../flow/flow-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class FlowController implements Controller {
  constructor(
    private readonly addFlow: AddFlow,
    private readonly getMovement: GetMovement,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) { return badRequest(error) }
      const { name, idMovement, description, idFlowType, value, date } = httpRequest.body

      const movement = await this.getMovement.get(idMovement)
      if (movement == null || movement.flag_deleted === 1) { return badRequest(new Error('invalid movement id provided')) }

      const flow = await this.addFlow.add({
        name,
        description,
        value: value ?? 0,
        date: this.createDate(date),
        id_movement: idMovement,
        id_flow_type: idFlowType
      })

      return ok({ id: flow })
    } catch (error) {
      return serverError(error)
    }
  }

  createDate(date: string | null): string {
    if (date == null || date.length === 0) { return new Date().toISOString().split('T')[0] }

    let parsedDate = date.split('-')
    if (parsedDate[0].length <= 2) { parsedDate = parsedDate.reverse() }
    
    return new Date(parsedDate.join('-')).toISOString().split('T')[0]
  }
}
