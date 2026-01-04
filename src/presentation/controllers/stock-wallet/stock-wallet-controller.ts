import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  AddStockWallet
} from './stock-wallet-controller-protocols'
import { badRequest, created, serverError } from '../../helpers/http/http-helper'

export class StockWalletController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addStockWallet: AddStockWallet
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }

      const { name, description, type } = httpRequest.body
      const { accountId } = httpRequest.body
      const stockWallet = await this.addStockWallet.add({
        name,
        description,
        id_account: accountId,
        type
      })

      return created(stockWallet)
    } catch (error) {
      console.log('\n\n', error, '\n\n')
      return serverError(error)
    }
  }
}
