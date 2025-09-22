import type { Router } from 'express'
import { makeFlowController } from '../factories/flow/flow-factory'
import { listFlowController } from '../factories/flow/list-flow-factory'
import { getFlowController } from '../factories/flow/get-flow-factory'
import { deleteFlowController } from '../factories/flow/delete-flow-factory'
import { updateFlowController } from '../factories/flow/update-flow-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/flow', adaptRoute(makeFlowController()))
  router.get('/flow/list', adaptRoute(listFlowController()))
  router.put('/flow', adaptRoute(updateFlowController()))
  router.get('/flow/:id', adaptRoute(getFlowController()))
  router.delete('/flow/:id', adaptRoute(deleteFlowController()))
}
