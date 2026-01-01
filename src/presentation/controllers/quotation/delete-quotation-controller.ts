import type { HttpResponse, Controller, DeleteQuotation, HttpRequest } from './quotation-controller-protocols'
import { serverError, okNoText } from '../../helpers/http/http-helper'

export class DeleteQuotationController implements Controller {
  constructor(private readonly deleteQuotation: DeleteQuotation) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      await this.deleteQuotation.delete(id)
      return okNoText()
    } catch (error) {
      return serverError(error)
    }
  }
}
