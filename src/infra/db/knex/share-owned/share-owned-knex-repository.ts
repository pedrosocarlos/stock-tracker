import type { AddShareOwnedRepository } from '../../../../data/protocols/db/share-owned/add-share-owned-repository'
import type { GetShareOwnedRepository } from '../../../../data/protocols/db/share-owned/get-share-owned-repository'
import type { ListSharesOwnedRepository } from '../../../../data/protocols/db/share-owned/list-shares-owned-repository'
import type { UpdateShareOwnedRepository } from '../../../../data/protocols/db/share-owned/update-share-owned-repository'
import type { DeleteShareOwnedRepository } from '../../../../data/protocols/db/share-owned/delete-share-owned-repository'
import type { GetShareOwnedByStockAndWalletRepository } from '../../../../data/protocols/db/share-owned/get-share-owned-by-stock-and-wallet-repository'
import type { ShareOwned } from '../../../../domain/models/share-owned'
import type { AddShareOwnedParams, UpdateShareOwnedParams } from '../../../../domain/usecases/share-owned'
import { db } from "../../knex"

export class ShareOwnedKnexRepository implements
  AddShareOwnedRepository,
  GetShareOwnedRepository,
  ListSharesOwnedRepository,
  UpdateShareOwnedRepository,
  DeleteShareOwnedRepository,
  GetShareOwnedByStockAndWalletRepository {
  async add(data: AddShareOwnedParams): Promise<ShareOwned> {
    const newShareOwned = await db('share_owned')
      .insert({
        value: data.average_price,
        id_stock_wallet: data.stock_wallet_id,
        amount: data.quantity,
        amount_crypto: data.crypto_quantity,
        id_stock: data.stock_id,
        id_crypto: data.crypto_id
      })
      .returning('*')
    return newShareOwned[0]
  }

  async get(shareOwnedId: string): Promise<ShareOwned> {
    const shareOwned = await db('share_owned')
      .where({ id_share_owned: shareOwnedId })
      .first()
    return shareOwned
  }

  async listByWallet(stockWalletId: string): Promise<ShareOwned[]> {
    const sharesOwned = await db('share_owned')
      .where({ id_stock_wallet: stockWalletId })
    return sharesOwned
  }

  async update(data: UpdateShareOwnedParams): Promise<ShareOwned> {
    const { id, ...updateData } = data
    const updatedShareOwned = await db('share_owned')
      .where({ id_share_owned: id })
      .update(updateData)
      .returning('*')
    return updatedShareOwned[0]
  }

  async delete(shareOwnedId: string): Promise<void> {
    await db('share_owned')
      .where({ id_share_owned: shareOwnedId })
      .del()
  }

  async getByStockAndWallet(stockId: string, stockWalletId: string): Promise<ShareOwned> {
    const shareOwned = await db('share_owned')
      .where({
        id_stock: stockId,
        id_stock_wallet: stockWalletId
      })
      .first()
    return shareOwned
  }
}
