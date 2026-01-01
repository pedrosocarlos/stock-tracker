import { CreateQuotationController } from '../../../presentation/controllers/quotation/create-quotation-controller'
import { DbAddQuotation } from '../../../data/usecases/quotation/db-add-quotation'
import { QuotationRepository } from '../../../infra/db/knex/quotation/quotation-knex-repository'
import type { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log-controller-decorator'
import { AxiosAdapter } from '../../../infra/axios/axios-adapter'

export const makeCreateQuotationController = (): Controller => {
  const quotationRepository = new QuotationRepository()
  const dbAddQuotation = new DbAddQuotation(quotationRepository)
  const createQuotationController = new CreateQuotationController(dbAddQuotation, new AxiosAdapter())
  return new LogControllerDecorator(createQuotationController)
}
