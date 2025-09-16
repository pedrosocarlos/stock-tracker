import type { HttpResponse } from '../../protocols/http'
import { ServerError, UnauthorizedError } from '../../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack ?? "nothing to show")
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const okNoText = (): HttpResponse => ({
  statusCode: 201,
  body: {}
})

export const empty = (): HttpResponse => ({
  statusCode: 204,
  body: {}
})