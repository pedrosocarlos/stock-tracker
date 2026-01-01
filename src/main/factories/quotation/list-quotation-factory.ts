import { ListQuotationController } from '../../../presentation/controllers/quotation/list-quotation-controller'
import { DbListQuotation } from '../../../data/usecases/quotation/db-list-quotation'
import { QuotationRepository } from '../../../infra/db/knex/quotation/quotation-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'

export const makeListQuotationController = (): Controller => {
  const quotationRepository = new QuotationRepository()
  const dbListQuotation = new DbListQuotation(quotationRepository)
  const listQuotationController = new ListQuotationController(dbListQuotation)
  return new LogControllerDecorator(listQuotationController)
}
