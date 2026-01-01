import { UpdateQuotationController } from '../../../presentation/controllers/quotation/update-quotation-controller'
import { DbUpdateQuotation } from '../../../data/usecases/quotation/db-update-quotation'
import { QuotationRepository } from '../../../infra/db/knex/quotation/quotation-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const makeUpdateQuotationController = (): Controller => {
  const quotationRepository = new QuotationRepository()
  const dbUpdateQuotation = new DbUpdateQuotation(quotationRepository)
  const updateQuotationController = new UpdateQuotationController(dbUpdateQuotation)
  return new LogControllerDecorator(updateQuotationController)
}
