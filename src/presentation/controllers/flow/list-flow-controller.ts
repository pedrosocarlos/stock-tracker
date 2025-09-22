import type { HttpResponse, Controller, ListFlow } from '../flow/flow-controller-protocols'
import { serverError, ok,empty } from '../../helpers/http/http-helper'

export class ListFlowController implements Controller {
  constructor(
    private readonly listFlow: ListFlow
  ) { }

  async handle(): Promise<HttpResponse> {
    try {
      const list = await this.listFlow.list()
      if(list == null) { return empty()}

      return ok(list)
    } catch (error) {
      return serverError(error)
    }
  }
}
