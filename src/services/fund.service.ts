import axios, { AxiosInstance } from 'axios';

interface FundServiceConfig {
  apiUrl: string;
  token: string;
}

interface Fund {
  id: string;
  name: string;
  value: number;
}

class FundService {
  private static instance: AxiosInstance;

  static configure({ apiUrl, token }: FundServiceConfig): void {
    this.instance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async getFunds(): Promise<Fund[]> {
    if (!this.instance) {
      throw new Error('FundService is not configured. Call configure() first.');
    }

    try {
      const response = await this.instance.get<Fund[]>('/funds');
      return response.data;
    } catch (error: any) {
      console.error('Error fetching funds:', error.message);
      throw error;
    }
  }
}

export default FundService;