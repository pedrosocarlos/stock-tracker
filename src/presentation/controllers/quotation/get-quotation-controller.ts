import type { HttpResponse, Controller, GetQuotation, HttpRequest } from './quotation-controller-protocols'
import { serverError, ok } from '../../helpers/http/http-helper'

export class GetQuotationController implements Controller {
  constructor(private readonly getQuotation: GetQuotation) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const quotation = await this.getQuotation.get(id)
      return ok(quotation)
    } catch (error) {
      return serverError(error)
    }
  }
}
