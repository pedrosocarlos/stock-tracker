import type { HttpResponse, Controller, UpdateQuotation, AddQuotationModel } from './quotation-controller-protocols'
import { serverError, noContent } from '../../helpers/http/http-helper'

export class UpdateQuotationController implements Controller {
  constructor(private readonly updateQuotation: UpdateQuotation) {}

  async handle(httpRequest: any): Promise<HttpResponse> {
    try {
      await this.updateQuotation.update(httpRequest.id, httpRequest)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export interface UpdateQuotationControllerRequest extends AddQuotationModel {
  id: number
}
