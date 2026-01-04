import type {
  Controller,
  HttpRequest,
  HttpResponse,
  ListStockWallets
} from './stock-wallet-controller-protocols'
import { ok, serverError } from '../../helpers/http/http-helper'

export class ListStockWalletsController implements Controller {
  constructor (
    private readonly listStockWallets: ListStockWallets
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { accountId } = httpRequest.body
      const stockWallets = await this.listStockWallets.list(accountId)
      return ok(stockWallets)
    } catch (error) {
      console.log('\n\n', error, '\n')
      return serverError(error)
    }
  }
}
