import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  UpdateStockWallet
} from './stock-wallet-controller-protocols'
import { badRequest, conflict, notFound, ok, serverError } from '../../helpers/http/http-helper'
import { NotFoundError } from '../../errors/not-found-error'

export class UpdateStockWalletController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly updateStockWallet: UpdateStockWallet
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }

      const { id, name, description, type, flagDeleted } = httpRequest.body
      const stockWallet = await this.updateStockWallet.update({
        id_stock_wallet: id,
        name,
        description,
        type,
        flag_deleted: flagDeleted
      })

      if (stockWallet == null) {
        return notFound(new NotFoundError('stock wallet'))
      }

      if (stockWallet.id_stock_wallet !== id) {
        return conflict(new Error('A stock wallet with this name already exists for this account.'))
      }

      return ok(stockWallet)
    } catch (error) {
      console.log('\n\n', error, '\n\n')
      
      return serverError(error)
    }
  }
}
