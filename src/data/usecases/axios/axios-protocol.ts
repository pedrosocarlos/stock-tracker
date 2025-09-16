import type { Axios } from '../../protocols/axios/axios'

export class GetAxiosStock implements Axios {
  constructor(
    private readonly axiosHelper: Axios
  ) { }

  async getStocks(): Promise<any> {
    return await this.axiosHelper.getStocks()
  }
}
