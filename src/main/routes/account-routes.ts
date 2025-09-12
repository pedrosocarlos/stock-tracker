import type { Router } from 'express'
import { makeAccountController } from '../factories/account/account-factory'
import { getAccountController } from '../factories/account/get-account-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/account', adaptRoute(makeAccountController()))
  router.get('/account/:id', adaptRoute(getAccountController()))
}
