import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  GetShareOwned
} from './share-owned-controller-protocols'
import { badRequest, ok, serverError } from '../../helpers/http/http-helper'

export class GetShareOwnedController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly getShareOwned: GetShareOwned
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) {
        return badRequest(error)
      }

      const { id } = httpRequest.params
      const shareOwned = await this.getShareOwned.get(id)

      return ok(shareOwned)
    } catch (error) {
      return serverError(error)
    }
  }
}
