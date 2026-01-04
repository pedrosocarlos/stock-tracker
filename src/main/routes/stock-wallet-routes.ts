import type { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeStockWalletController } from '../factories/stock-wallet/stock-wallet-factory'
import { makeGetStockWalletController } from '../factories/stock-wallet/get-stock-wallet-factory'
import { makeListStockWalletsController } from '../factories/stock-wallet/list-stock-wallets-factory'
import { makeUpdateStockWalletController } from '../factories/stock-wallet/update-stock-wallet-factory'
import { makeDeleteStockWalletController } from '../factories/stock-wallet/delete-stock-wallet-factory'

export default (router: Router): void => {
  router.post('/stock-wallet', adaptRoute(makeStockWalletController()))
  router.get('/stock-wallet', adaptRoute(makeListStockWalletsController()))
  router.get('/stock-wallet/:id', adaptRoute(makeGetStockWalletController()))
  router.put('/stock-wallet', adaptRoute(makeUpdateStockWalletController()))
  router.delete('/stock-wallet/:id', adaptRoute(makeDeleteStockWalletController()))
}
