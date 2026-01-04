import type { HttpResponse, Controller, DeleteQuotation, HttpRequest } from './quotation-controller-protocols'
import { serverError, noContent } from '../../helpers/http/http-helper'

export class DeleteQuotationController implements Controller {
  constructor(private readonly deleteQuotation: DeleteQuotation) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      await this.deleteQuotation.delete(id)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
