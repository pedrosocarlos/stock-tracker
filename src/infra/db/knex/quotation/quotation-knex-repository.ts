import type { AddQuotationRepository } from '../../../../data/protocols/db/quotation/add-quotation-repository'
import type { GetQuotationRepository } from '../../../../data/protocols/db/quotation/get-quotation-repository'
import type { ListQuotationRepository } from '../../../../data/protocols/db/quotation/list-quotation-repository'
import type { UpdateQuotationRepository } from '../../../../data/protocols/db/quotation/update-quotation-repository'
import type { DeleteQuotationRepository } from '../../../../data/protocols/db/quotation/delete-quotation-repository'
import type { AddQuotationModel } from '../../../../domain/usecases/quotation'
import type { QuotationModel } from '../../../../domain/models/quotation'
import { db } from "../../knex"

export class QuotationRepository implements AddQuotationRepository, GetQuotationRepository, ListQuotationRepository, UpdateQuotationRepository, DeleteQuotationRepository {
  async add(quotation: AddQuotationModel[]): Promise<void> {
    await db('quotation').insert(quotation)
  }

  async get(id: number): Promise<QuotationModel> {
    const quotation = await db('quotation').where('id_quotation', id).first()
    return quotation
  }

  async list(): Promise<QuotationModel[]> {
    const quotations = await db('quotation')
    return quotations
  }

  async update(id: number, quotation: AddQuotationModel): Promise<void> {
    await db('quotation').where('id_quotation', id).update(quotation)
  }

  async delete(id: number): Promise<void> {
    await db('quotation').where('id_quotation', id).update({ flag_deleted: 1 })
  }
}
