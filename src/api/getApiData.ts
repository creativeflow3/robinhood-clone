import axios from 'axios';
import {
  db,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from '../config/Firebase.ts';
import { TickerType, StockDataType } from '../types.ts';

const FINNHUB_TOKEN = import.meta.env.VITE_FINNHUB_TOKEN;
const FINNHUB_BASE_URL = import.meta.env.VITE_FINNHUB_BASE_URL;

export async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, 'myStocks'));
  const data: TickerType[] = [];
  querySnapshot.forEach((doc) => {
    const { ticker, shares } = doc.data();
    data.push({ id: doc.id, ticker, shares: parseInt(shares) });
  });
  return data;
}

export async function fetchStockTicker(tickerName: string) {
  const myQuery = query(
    collection(db, 'myStocks'),
    where('ticker', '==', tickerName)
  );
  const querySnapshot = await getDocs(myQuery);
  const data: TickerType[] = [];
  querySnapshot.forEach((item) => {
    const { ticker, shares } = item.data();
    const ref = doc(db, 'myStocks', item.id);
    updateDoc(ref, {
      shares: shares + 1,
    });
    data.push({ id: item.id, ticker, shares: parseInt(shares) });
  });
  return data;
}

async function makeStockAPICall(endpoint: string) {
  const tickerCall = await axios.get(endpoint).catch((error) => {
    console.log(error);
  });
  return tickerCall;
}

export async function makeMultipleAPICalls(stocksList: string[]) {
  const endpoints = stocksList.map((stock) => {
    return `${FINNHUB_BASE_URL}?symbol=${stock}&token=${FINNHUB_TOKEN}`;
  });
  const promises = endpoints.map(makeStockAPICall);
  const responses = await Promise.all(promises);
  //format
  const data: StockDataType[] = responses.map((res, key) => {
    return {
      name: stocksList[key],
      ...res?.data,
    };
  });
  return data;
}
