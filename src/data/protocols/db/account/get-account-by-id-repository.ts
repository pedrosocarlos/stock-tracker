import type { AccountModel } from '../../../../domain/models/account'

export interface LoadAccountByIdRepository {
  findById: (id: number) => Promise<AccountModel | null>
}
