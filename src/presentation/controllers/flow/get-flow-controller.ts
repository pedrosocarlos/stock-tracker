import type { HttpResponse, HttpRequest, Controller, GetFlow } from './flow-controller-protocols'
import { badRequest, serverError, ok, empty } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class GetFlowController implements Controller {
  constructor(
    private readonly getFlow: GetFlow,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) { return badRequest(error) }
      const { id } = httpRequest.params

      const flow = await this.getFlow.get(id)
      if(flow == null) { return empty()}

      return ok(flow)
    } catch (error) {
      return serverError(error)
    }
  }
}
