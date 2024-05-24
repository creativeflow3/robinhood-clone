import { useState, useEffect, type ReactNode } from 'react';
import './Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow.tsx';
import { StockDataType, TickerType } from './types.ts';
import { fetchDataFromFirestore } from './api/getApiData.ts';

const FINNHUB_TOKEN = import.meta.env.VITE_FINNHUB_TOKEN;
const FINNHUB_BASE_URL = import.meta.env.VITE_FINNHUB_BASE_URL;

function Stats(): ReactNode {
  const [stockData, setStockData] = useState<StockDataType[]>([]);
  const [myStocks, setMyStocks] = useState<TickerType[]>([]);

  const getStocksData = (stock: string) => {
    return axios
      .get(`${FINNHUB_BASE_URL}?symbol=${stock}&token=${FINNHUB_TOKEN}`)
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
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
    const tempStocksData: StockDataType[] = [];
    const promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setStockData(tempStocksData);
    });
    async function fetchData() {
      const data: TickerType[] = await fetchDataFromFirestore();
      // match with data from api
      if (stockData.length > 0) {
        for (let i = 0; i < data.length; i++) {
          console.log('id', data);
          const ticker = data[i].ticker;
          const res = stockData.find(({ name }) => name === ticker);
          if (typeof res !== 'undefined') {
            data[i] = { ...res, ...data[i] };
          }
        }
      } // miCDg7SqCrOm7Pf0ozWg
      setMyStocks(data);
    }
    fetchData();
  }, []);

  return (
    <div className="stats">
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
