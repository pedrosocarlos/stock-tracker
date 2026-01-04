import type { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeShareOwnedController } from '../factories/share-owned/share-owned-factory'
import { makeGetShareOwnedController } from '../factories/share-owned/get-share-owned-factory'
import { makeListSharesOwnedController } from '../factories/share-owned/list-shares-owned-factory'
import { makeUpdateShareOwnedController } from '../factories/share-owned/update-share-owned-factory'
import { makeDeleteShareOwnedController } from '../factories/share-owned/delete-share-owned-factory'

export default (router: Router): void => {
  router.post('/share-owned', adaptRoute(makeShareOwnedController()))
  router.get('/share-owned/wallet/:walletId', adaptRoute(makeListSharesOwnedController()))
  router.get('/share-owned/:id', adaptRoute(makeGetShareOwnedController()))
  router.put('/share-owned/:id', adaptRoute(makeUpdateShareOwnedController()))
  router.delete('/share-owned/:id', adaptRoute(makeDeleteShareOwnedController()))
}
