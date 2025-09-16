import type { HttpResponse, HttpRequest, Controller, DeleteMovement } from './movement-controller-protocols'
import { badRequest, serverError, okNoText, empty } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

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

      const movement = await this.deleteMovement.delete(id)
      if(movement === 0) { return empty()}

      return okNoText()
    } catch (error) {
      return serverError(error)
    }
  }
}
