import type { HttpResponse, HttpRequest, Controller, AddAccount } from './movement-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class MovementController implements Controller {
  constructor(
    private readonly addAccount: AddAccount,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) { return badRequest(error) }
      const { name } = httpRequest.body

      console.log("\n\nrepo\n\n", name, "\n\n")

      const user = await this.addAccount.add({ name })

      return ok({ id: user })
    } catch (error) {
      return serverError(error)
    }
  }
}
