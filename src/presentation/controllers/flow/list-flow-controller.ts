import type { HttpResponse, Controller, ListFlow } from '../flow/flow-controller-protocols'
import { serverError, ok, noContent } from '../../helpers/http/http-helper'

export class ListFlowController implements Controller {
  constructor(
    private readonly listFlow: ListFlow
  ) { }

  async handle(): Promise<HttpResponse> {
    try {
      const list = await this.listFlow.list()
      if(list == null) { return noContent()}

      return ok(list)
    } catch (error) {
      return serverError(error)
    }
  }
}
