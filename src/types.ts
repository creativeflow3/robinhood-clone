export type TickerType = {
  id: string;
  shares: number;
  ticker: string;
};

export type StockDataType = {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  name: string;
  o: number;
  pc: number;
  t: number;
  shares?: number;
};
