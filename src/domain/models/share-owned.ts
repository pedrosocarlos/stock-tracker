export interface ShareOwned {
  id: string
  stock_wallet_id: string
  stock_id?: string
  crypto_id?: string
  quantity?: number
  crypto_quantity?: number
  average_price: number
}
