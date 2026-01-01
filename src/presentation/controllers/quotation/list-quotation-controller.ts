import type { HttpResponse, Controller, ListQuotation } from './quotation-controller-protocols'
import { serverError, ok } from '../../helpers/http/http-helper'

export class ListQuotationController implements Controller {
  constructor(private readonly listQuotation: ListQuotation) {}

  async handle(): Promise<HttpResponse> {
    try {
      const quotations = await this.listQuotation.list()
      return ok(quotations)
    } catch (error) {
      return serverError(error)
    }
  }
}
