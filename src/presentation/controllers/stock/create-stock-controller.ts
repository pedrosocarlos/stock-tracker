import type { HttpResponse, Controller, AddStock } from '../stock/stock-controller-protocols'
import { serverError, okNoText } from '../../helpers/http/http-helper'
import type { AxiosAdapter } from '../../../infra/axios/axios-adapter'

export class CreateStockController implements Controller {
  constructor(
    private readonly addStock: AddStock,
    private readonly axiosHelper: AxiosAdapter
  ) { }

  async handle(): Promise<HttpResponse> {
    try {
      
      const stocks = await this.axiosHelper.getStocks()

      const stocksSorted = stocks.sort((a, b) => a.ticker.localeCompare(b.ticker))

      await this.addStock.add(stocksSorted)

      return okNoText()
    } catch (error) {
      return serverError(error)
    }
  }
}
