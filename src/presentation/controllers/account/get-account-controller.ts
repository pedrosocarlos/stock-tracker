import type { HttpResponse, HttpRequest, Controller, GetAccount } from './account-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import type { Validation } from '../../protocols/validation'

export class GetAccountController implements Controller {
  constructor(
    private readonly getAccount: GetAccount,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) { return badRequest(error) }
      const { id } = httpRequest.params

      const user = await this.getAccount.get(id)

      return ok(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
