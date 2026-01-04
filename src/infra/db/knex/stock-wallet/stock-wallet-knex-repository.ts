import type { AddStockWalletRepository } from '../../../../data/protocols/db/stock-wallet/add-stock-wallet-repository'
import type { GetStockWalletRepository } from '../../../../data/protocols/db/stock-wallet/get-stock-wallet-repository'
import type { ListStockWalletsRepository } from '../../../../data/protocols/db/stock-wallet/list-stock-wallets-repository'
import type { UpdateStockWalletRepository } from '../../../../data/protocols/db/stock-wallet/update-stock-wallet-repository'
import type { DeleteStockWalletRepository } from '../../../../data/protocols/db/stock-wallet/delete-stock-wallet-repository'
import type { GetStockWalletByNameRepository } from '../../../../data/protocols/db/stock-wallet/get-stock-wallet-by-name-repository'
import type { StockWallet } from '../../../../domain/models/stock-wallet'
import type { AddStockWalletParams, UpdateStockWalletParams } from '../../../../domain/usecases/stock-wallet'
import { db } from "../../knex"

export class StockWalletKnexRepository implements
  AddStockWalletRepository,
  GetStockWalletRepository,
  ListStockWalletsRepository,
  UpdateStockWalletRepository,
  DeleteStockWalletRepository,
  GetStockWalletByNameRepository {
  async add (data: AddStockWalletParams): Promise<StockWallet> {
    const newStockWallet = await db('stock_wallet')
      .insert({ ...data })
      .returning('*')
    return newStockWallet[0]
  }

  async get (stockWalletId: string): Promise<StockWallet> {
    const stockWallet = await db('stock_wallet')
      .where({ id_stock_wallet: stockWalletId })
      .first()
    return stockWallet
  }

  async list (accountId: string): Promise<StockWallet[]> {
    const stockWallets = await db('stock_wallet')
      .where({ id_account: accountId })
    return stockWallets
  }

  async update (data: UpdateStockWalletParams): Promise<StockWallet> {
    const updatedStockWallet = await db('stock_wallet')
      .where({ id_stock_wallet: data.id_stock_wallet })
      .update({
        name: data.name,
        description: data.description,
        type: data.type,
        flag_deleted: data.flag_deleted
      })
      .returning('*')
    return updatedStockWallet[0]
  }

  async delete (stockWalletId: string): Promise<void> {
    await db('stock_wallet')
      .where({ id_stock_wallet: stockWalletId })
      .del()
  }

  async getByName (name: string, accountId: string): Promise<StockWallet> {
    const stockWallet = await db('stock_wallet')
      .where({
        name,
        id_account: accountId
      })
      .first()
    return stockWallet
  }
}
