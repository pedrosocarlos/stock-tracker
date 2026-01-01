import type { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeCreateQuotationController } from '../factories/quotation/create-quotation-factory'
import { makeListQuotationController } from '../factories/quotation/list-quotation-factory'
import { makeGetQuotationController } from '../factories/quotation/get-quotation-factory'
import { makeDeleteQuotationController } from '../factories/quotation/delete-quotation-factory'
import { makeUpdateQuotationController } from '../factories/quotation/update-quotation-factory'

export default (router: Router): void => {
  router.post('/quotation', adaptRoute(makeCreateQuotationController()))
  router.get('/quotation/list', adaptRoute(makeListQuotationController()))
  router.get('/quotation/:id', adaptRoute(makeGetQuotationController()))
  router.delete('/quotation/:id', adaptRoute(makeDeleteQuotationController()))
  router.put('/quotation', adaptRoute(makeUpdateQuotationController()))
}