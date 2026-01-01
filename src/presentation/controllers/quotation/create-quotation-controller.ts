import type { HttpResponse, Controller, AddQuotation } from './quotation-controller-protocols'
import { serverError, okNoText } from '../../helpers/http/http-helper'
import type { AxiosAdapter } from '../../../infra/axios/axios-adapter'

export class CreateQuotationController implements Controller {
  constructor(
    private readonly addQuotation: AddQuotation,
    private readonly axiosHelper: AxiosAdapter
  ) {}

  async handle(): Promise<HttpResponse> {
    try {
      const quotations = await this.axiosHelper.getQuotations("CEAB3")
      console.log(quotations)
      /* await this.addQuotation.add(quotations) */
      return okNoText()
    } catch (error) {
      return serverError(error)
    }
  }
}
