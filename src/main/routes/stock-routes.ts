import type { Router } from 'express'
import { makeStockController } from '../factories/stock/create-stock-factory'
import { getMovementController } from '../factories/movement/get-movement-factory'
import { listMovementController } from '../factories/movement/list-movement-factory'
import { deleteMovementController } from '../factories/movement/delete-movement-factory'
import { updateMovementController } from '../factories/movement/update-movement-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/stock', adaptRoute(makeStockController()))
  router.put('/stock', adaptRoute(updateMovementController()))
  router.get('/stock/list', adaptRoute(listMovementController()))
  router.get('/stock/:id', adaptRoute(getMovementController()))
  router.delete('/stock/:id', adaptRoute(deleteMovementController()))
}
