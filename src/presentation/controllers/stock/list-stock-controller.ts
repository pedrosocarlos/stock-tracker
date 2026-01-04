import type { HttpResponse, Controller, ListStock } from '../stock/stock-controller-protocols'
import { serverError, ok, noContent } from '../../helpers/http/http-helper'

export class ListStockController implements Controller {
  constructor(
    private readonly listMovement: ListStock
  ) { }

  async handle(): Promise<HttpResponse> {
    try {
      const movement = await this.listMovement.list()
      if(movement == null) { return noContent()}

      return ok(movement)
    } catch (error) {
      return serverError(error)
    }
  }
}
