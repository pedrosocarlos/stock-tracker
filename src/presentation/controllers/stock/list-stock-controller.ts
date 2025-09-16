import type { HttpResponse, Controller, ListStock } from '../stock/stock-controller-protocols'
import { serverError, ok,empty } from '../../helpers/http/http-helper'

export class ListStockController implements Controller {
  constructor(
    private readonly listMovement: ListStock
  ) { }

  async handle(): Promise<HttpResponse> {
    try {
      const movement = await this.listMovement.list()
      if(movement == null) { return empty()}

      return ok(movement)
    } catch (error) {
      return serverError(error)
    }
  }
}
