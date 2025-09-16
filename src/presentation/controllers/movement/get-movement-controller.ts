import type { HttpResponse, HttpRequest, Controller, GetMovement } from './movement-controller-protocols'
import { badRequest, serverError, ok, empty } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class GetMovementController implements Controller {
  constructor(
    private readonly getMovement: GetMovement,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) { return badRequest(error) }
      const { id } = httpRequest.params

      const movement = await this.getMovement.get(id)
      if(movement == null) { return empty()}

      return ok(movement)
    } catch (error) {
      return serverError(error)
    }
  }
}
