import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  GetStockWallet
} from './stock-wallet-controller-protocols'
import { badRequest, notFound, ok, serverError } from '../../helpers/http/http-helper'
import { NotFoundError } from '../../errors/not-found-error'

export class GetStockWalletController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getStockWallet: GetStockWallet
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error != null) {
        return badRequest(error)
      }
      
      const { id } = httpRequest.params
      const stockWallet = await this.getStockWallet.get(id)

      if (stockWallet == null) {
        return notFound(new NotFoundError('stock wallet'))
      }

      return ok(stockWallet)
    } catch (error) {
      console.log('\n\n', error, '\n\n')
      return serverError(error)
    }
  }
}
