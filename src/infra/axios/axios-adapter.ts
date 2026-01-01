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

  async getQuotations(ticker: string): Promise<any> {
    try {
      const { data } = await axios.get(`https://www.investsite.com.br/principais_indicadores.php?cod_negociacao=${ticker}`)
      const $ = cheerio.load(data)

      let currentQuote: any[] = []

      let currentDate = ''

      // Seleciona o elemento de cotação
      $("#tabela_resumo_empresa > tbody > tr:nth-child(10) > td.direita.text-end").each((_, element) => {
        currentQuote = $(element).text().split(" ")
      })

      // Seleciona o elemento da data de cotação
      $("#tabela_resumo_empresa > tbody > tr:nth-child(8) > td.direita.text-end").each((_, element) => {
        currentDate = $(element).text().split("/").reverse().join("-")
      })

      return {
        value: Number(currentQuote[1].replace(',', '.')),
        date: currentDate
      }
    } catch (err) {
      console.error("Erro ao buscar as ações:", err)
      return []
    }
  }
}
