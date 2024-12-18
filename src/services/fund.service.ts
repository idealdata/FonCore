import axios, { AxiosInstance } from "axios";

class FundService {
  private static instance: AxiosInstance;

  static configure({ apiUrl, token }: { apiUrl: string; token: string }): void {
    this.instance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async getFunds(): Promise<any> {
    if (!this.instance) {
      throw new Error('FundService is not configured. Call configure() first.');
    }

    const response = await this.instance.get('/funds');
    return response.data;
  }
}

export default FundService;