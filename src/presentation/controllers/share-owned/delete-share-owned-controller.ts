import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  DeleteShareOwned
} from './share-owned-controller-protocols'
import { badRequest, notFound, noContent, serverError } from '../../helpers/http/http-helper'
import { NotFoundError } from '../../errors/not-found-error'

export class DeleteShareOwnedController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteShareOwned: DeleteShareOwned
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) {
        return badRequest(error)
      }
      const { id } = httpRequest.params
      const result = await this.deleteShareOwned.delete(id)
      if (result === 0) {
        return notFound(new NotFoundError('share owned'))
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
