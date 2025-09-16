import type { HttpResponse, HttpRequest, Controller, AddAccount } from './account-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class AccountController implements Controller {
  constructor(
    private readonly addAccount: AddAccount,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) { return badRequest(error) }
      const { name, type } = httpRequest.body

      const user = await this.addAccount.add({ name, type })

      return ok({ id: user })
    } catch (error) {
      return serverError(error)
    }
  }
}
