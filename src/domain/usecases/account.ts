import type { AccountModel } from '../models/account'

export interface AddAccountModel {
  name: string
  type?: number
  flag_deleted?: number
}

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}

export interface GetAccount {
  get: (id: number) => Promise<AccountModel | null>
}
