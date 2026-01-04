import type { HttpResponse, HttpRequest, Controller, UpdateFlow } from './flow-controller-protocols'
import { badRequest, serverError, noContent } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class UpdateFlowController implements Controller {
  constructor(
    private readonly updateFlow: UpdateFlow,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) { return badRequest(error) }

      const {
        id, name, idMovement, description,
        idFlowType, flagDeleted, value,
        date
      } = httpRequest.body

      await this.updateFlow.update({
        id,
        name,
        description,
        value,
        date,
        id_movement: idMovement,
        id_flow_type: idFlowType,
        flag_deleted: flagDeleted
      })

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
