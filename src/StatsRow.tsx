import React, { useState, type ReactNode } from 'react';
import './StatsRow.css';
import StockSVG from './assets/stock.svg';
import NegStockSVG from './assets/negStock.svg';
import { TickerType } from './types.ts';
import { fetchStockTicker } from './api/getApiData';

type Row = {
  name: string;
  price: number;
  openPrice: number;
  volume?: number;
};

function StatsRow({ name, openPrice, price, volume }: Row): ReactNode {
  const [tickerData, setTickereData] = useState<TickerType>([]);

  async function getTicker(tickerName: string): Promise<void> {
    const data: TickerType[] = await fetchStockTicker(tickerName);
    setTickereData(data[0]);
  }
  const percentage =
    openPrice !== 0 ? ((price - openPrice) / openPrice) * 100 : 0;

  const buyStock = (): void => {
    getTicker(name);
  };

  const shares = tickerData?.shares ? tickerData.shares : volume;
  const stockImage = percentage < 0 ? NegStockSVG : StockSVG;
  const rowPercentageCss =
    percentage < 0 ? 'row__percentage row__percentage__red' : 'row__percentage';
  return (
    <div className="row" onClick={buyStock} data-testid="stats-row">
      <div className="row__intro">
        <h1>{name}</h1>
        <p>{shares && shares + ' shares'}</p>
      </div>
      <div className="row__chart">
        <img src={stockImage} height={16} />
      </div>
      <div className="row__numbers">
        <p className="row__price">{price}</p>
        <p className={rowPercentageCss}> {Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
