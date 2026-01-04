import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  DeleteStockWallet
} from './stock-wallet-controller-protocols'
import { badRequest, notFound, noContent, serverError } from '../../helpers/http/http-helper'
import { NotFoundError } from '../../errors/not-found-error'

export class DeleteStockWalletController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteStockWallet: DeleteStockWallet
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) {
        return badRequest(error)
      }

      const { id } = httpRequest.params
      const result = await this.deleteStockWallet.delete(id)
      
      if (result === 0) {
        return notFound(new NotFoundError('stock wallet'))
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
