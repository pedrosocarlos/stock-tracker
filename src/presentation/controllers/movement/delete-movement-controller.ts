import type { HttpResponse, HttpRequest, Controller, DeleteMovement } from './movement-controller-protocols'
import { badRequest, serverError, noContent, notFound } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'
import { NotFoundError } from '../../errors/not-found-error'

export class DeleteMovementController implements Controller {
  constructor(
    private readonly deleteMovement: DeleteMovement,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) { return badRequest(error) }
      const { id } = httpRequest.params

      const result = await this.deleteMovement.delete(id)
      if(result === 0) { return notFound(new NotFoundError('movement'))}

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
