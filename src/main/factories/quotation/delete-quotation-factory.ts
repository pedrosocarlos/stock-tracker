import { DeleteQuotationController } from '../../../presentation/controllers/quotation/delete-quotation-controller'
import { DbDeleteQuotation } from '../../../data/usecases/quotation/db-delete-quotation'
import { QuotationRepository } from '../../../infra/db/knex/quotation/quotation-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const makeDeleteQuotationController = (): Controller => {
  const quotationRepository = new QuotationRepository()
  const dbDeleteQuotation = new DbDeleteQuotation(quotationRepository)
  const deleteQuotationController = new DeleteQuotationController(dbDeleteQuotation)
  return new LogControllerDecorator(deleteQuotationController)
}
