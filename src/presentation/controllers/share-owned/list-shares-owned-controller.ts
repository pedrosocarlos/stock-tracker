import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  ListSharesOwned
} from './share-owned-controller-protocols'
import { badRequest, ok, serverError } from '../../helpers/http/http-helper'

export class ListSharesOwnedController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly listSharesOwned: ListSharesOwned
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) {
        return badRequest(error)
      }

      const { walletId } = httpRequest.params
      const sharesOwned = await this.listSharesOwned.listByWallet(walletId)
      
      return ok(sharesOwned)
    } catch (error) {
      return serverError(error)
    }
  }
}
