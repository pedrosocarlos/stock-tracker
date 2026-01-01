import { GetQuotationController } from '../../../presentation/controllers/quotation/get-quotation-controller'
import { DbGetQuotation } from '../../../data/usecases/quotation/db-get-quotation'
import { QuotationRepository } from '../../../infra/db/knex/quotation/quotation-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const makeGetQuotationController = (): Controller => {
  const quotationRepository = new QuotationRepository()
  const dbGetQuotation = new DbGetQuotation(quotationRepository)
  const getQuotationController = new GetQuotationController(dbGetQuotation)
  return new LogControllerDecorator(getQuotationController)
}
