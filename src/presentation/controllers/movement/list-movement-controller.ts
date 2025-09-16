import type { HttpResponse, HttpRequest, Controller, ListMovement } from './movement-controller-protocols'
import { serverError, ok,empty } from '../../helpers/http/http-helper'

export class ListMovementController implements Controller {
  constructor(
    private readonly listMovement: ListMovement
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const movement = await this.listMovement.list()
      if(movement == null) { return empty()}

      return ok(movement)
    } catch (error) {
      return serverError(error)
    }
  }
}
