declare global {
  interface FCNewsListItem {
    id: number;
    date: string;
    url: string;
    symbol: string;
    title: string;
    name: string;
    type: FCNewsTypes;
  }
  type FCNewsTypes = "PORTFOYDAGILIM" | "HALKAARZ";
}

export {};
