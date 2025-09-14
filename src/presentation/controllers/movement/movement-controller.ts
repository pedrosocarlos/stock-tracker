import type { HttpResponse, HttpRequest, Controller, AddMovement } from './movement-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class MovementController implements Controller {
  constructor(
    private readonly addMovement: AddMovement,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) { return badRequest(error) }
      const { name, idAccount, description, type } = httpRequest.body

      const user = await this.addMovement.add({
        name,
        id_account:idAccount,
        description,
        type
      })

      return ok({ id: user })
    } catch (error) {
      return serverError(error)
    }
  }
}
