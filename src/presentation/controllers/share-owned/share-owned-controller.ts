import type {
  Controller,
  HttpRequest,
  HttpResponse,
  Validation,
  AddShareOwned
} from './share-owned-controller-protocols'
import { badRequest, created, serverError } from '../../helpers/http/http-helper'

export class ShareOwnedController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addShareOwned: AddShareOwned
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }

      const { stockWalletId, stockId, quantity, cryptoId, cryptoQuantity, averagePrice,  } = httpRequest.body
      const shareOwned = await this.addShareOwned.add({
        stock_wallet_id: stockWalletId,
        average_price: averagePrice,
        stock_id: stockId ?? 0,
        quantity: quantity ?? 0,
        crypto_id: cryptoId ?? 0,
        crypto_quantity: cryptoQuantity ?? 0
      })

      return created(shareOwned)
    } catch (error) {
      console.log('\n\n', error, '\n')

      return serverError(error)
    }
  }
}
