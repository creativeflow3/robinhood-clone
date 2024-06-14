import React, { useState, useEffect, type ReactNode } from 'react';
import './Stats.css';
import StatsRow from './StatsRow.tsx';
import { StockDataType, TickerType } from '../types.ts';
import {
  fetchDataFromFirestore,
  makeMultipleAPICalls,
} from '../api/getApiData.ts';

const stocksList = [
  'AAPL',
  'MSFT',
  'TSLA',
  'FB',
  'BABA',
  'UBER',
  'DIS',
  'SBUX',
];

function Stats(): ReactNode {
  const [stockData, setStockData] = useState<StockDataType[]>([]);
  const [myStocks, setMyStocks] = useState<TickerType[]>([]);

  useEffect(() => {
    async function fetchStockData() {
      const dataReturned = await makeMultipleAPICalls(stocksList);
      setStockData(dataReturned);
    }
    fetchStockData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data: TickerType[] = await fetchDataFromFirestore();
      // match with data from api
      if (stockData.length > 0) {
        for (let i = 0; i < data.length; i++) {
          const ticker = data[i].ticker;
          const res = stockData.find(({ name }) => name === ticker);
          if (typeof res !== 'undefined') {
            data[i] = { ...res, ...data[i] };
          }
        }
      }
      setMyStocks(data);
    }
    fetchData();
  }, [stockData]);

  return (
    <div className="stats" data-testid="stats-column">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => {
              return (
                <StatsRow
                  key={stock.ticker}
                  name={stock.ticker}
                  openPrice={stock.o}
                  price={stock.c}
                  volume={stock.shares}
                />
              );
            })}
          </div>
        </div>
        <div className="stats__header stats__lists">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock: StockDataType): ReactNode => {
              return (
                <StatsRow
                  key={stock.name}
                  name={stock.name}
                  openPrice={stock.o}
                  price={stock.c}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
