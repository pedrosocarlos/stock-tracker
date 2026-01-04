import type { HttpResponse, HttpRequest, Controller, DeleteFlow } from './flow-controller-protocols'
import { badRequest, serverError, noContent, notFound } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'
import { NotFoundError } from '../../errors/not-found-error'

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

      const result = await this.deleteFlow.delete(id)
      if(result === 0) { return notFound(new NotFoundError('flow'))}

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
