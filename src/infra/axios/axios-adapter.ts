import axios from 'axios'
import * as cheerio from 'cheerio'

import type { Axios } from '../../data/protocols/axios/axios'
import type { StockData } from 'domain/models/stock'


export class AxiosAdapter implements Axios {
  async getStocks(): Promise<StockData[]> {
    try {
      const { data } = await axios.get("https://www.fundamentus.com.br/resultado.php")
      const $ = cheerio.load(data)

      const stocks: StockData[] = []

      // Seleciona as linhas da tabela (ignora cabeçalho)
      $("#resultado tbody tr").each((_, element) => {
        const tds = $(element).find("td")

        const name = $(tds[0]).find('span').attr('title') ?? 'unknow'
        const ticker = $(tds[0]).text().trim()

        const quotationStr = $(tds[1]).text().trim().replace(/\./g, '').replace(',', '.')
        const quotation = isNaN(Number(quotationStr)) ? 0 : parseFloat(quotationStr)

        const transactedValueStr = $(tds[17]).text().trim().replace(/\./g, '').replace(',', '.')
        const transactedValue = isNaN(Number(transactedValueStr)) ? 0 : parseFloat(transactedValueStr)

        if ((ticker.length > 0) && quotation > 0 && transactedValue > 1000000) {
          stocks.push({ ticker, name, stock_type: 1 })
        }
      })

      return stocks
    } catch (err) {
      console.error("Erro ao buscar as ações:", err)
      return []
    }
  }
}
