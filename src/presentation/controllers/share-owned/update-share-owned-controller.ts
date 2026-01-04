import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  UpdateShareOwned
} from './share-owned-controller-protocols'
import { badRequest, ok, serverError } from '../../helpers/http/http-helper'

export class UpdateShareOwnedController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateShareOwned: UpdateShareOwned
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }

      const { id } = httpRequest.params
      const { quantity, averagePrice } = httpRequest.body
      const shareOwned = await this.updateShareOwned.update({
        id,
        quantity,
        average_price: averagePrice
      })
      
      return ok(shareOwned)
    } catch (error) {
      return serverError(error)
    }
  }
}
