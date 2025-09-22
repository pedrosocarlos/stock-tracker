import type { HttpResponse, HttpRequest, Controller, DeleteFlow } from './flow-controller-protocols'
import { badRequest, serverError, okNoText, empty } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class DeleteFlowController implements Controller {
  constructor(
    private readonly deleteFlow: DeleteFlow,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) { return badRequest(error) }
      const { id } = httpRequest.params

      const flow = await this.deleteFlow.delete(id)
      if(flow === 0) { return empty()}

      return okNoText()
    } catch (error) {
      return serverError(error)
    }
  }
}
