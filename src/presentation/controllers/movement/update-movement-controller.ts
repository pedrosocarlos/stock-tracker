import type { HttpResponse, HttpRequest, Controller, UpdateMovement } from './movement-controller-protocols'
import { badRequest, serverError, noContent } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class UpdateMovementController implements Controller {
  constructor(
    private readonly updateMovement: UpdateMovement,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) { return badRequest(error) }
      const { id, name, idAccount, description, type, flagDeleted } = httpRequest.body

      await this.updateMovement.update({
        id,
        name,
        id_account: idAccount,
        description,
        type,
        flag_deleted: flagDeleted
      })

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
