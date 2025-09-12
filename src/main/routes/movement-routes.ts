import type { Router } from 'express'
import { makeMovementController } from '../factories/movement/movement-factory'
import { getMovementController } from '../factories/movement/get-movement-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/movement', adaptRoute(makeMovementController()))
  router.get('/movement/:id', adaptRoute(getMovementController()))
  router.get('/movement/list', adaptRoute(getMovementController()))
  router.put('/movement/:id', adaptRoute(getMovementController()))
  router.delete('/movement/:id', adaptRoute(getMovementController()))
}
